<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CharacterCard from '~/components/Application/CharacterCard.vue'
import { universes } from '~/data/universes'
import type { Character } from '~/types/Character'

const route = useRoute()
const router = useRouter()

const characters = ref<Character[]>([])

const universe = computed(() => {
  return universes.find(universe => universe.route === `universes/${route.params.universe}`)
})

if (universe.value) {
  const { data } = await universe.value.api(universe.value.characterPath)
  characters.value = universe.value.mapData(data.value)
}

onBeforeMount(() => {
  if (!universe.value) {
    router.push('/universes/404')
  }
})
</script>

<template>
  <div class="py-8">
    <UContainer>
      <div class="container mx-auto">
        <p>
          <NuxtLink to="/">
            Back to universes
          </NuxtLink>
        </p>
        <h1 class="text-4xl font-bold mb-8">
          {{ universe?.name }}
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CharacterCard v-for="character in characters" :key="character.name" :character="character" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

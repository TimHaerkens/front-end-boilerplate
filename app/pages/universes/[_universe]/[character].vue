<script setup lang="ts">
import { useRoute } from 'vue-router'
import { universes } from '~/data/universes'

const route = useRoute()
const character = ref<any | null>(null)

const universe = computed(() => {
  return universes.find(universe => universe.route === `universes/${route.params._universe}`) ?? null
})

if (universe.value) {
  const { data } = await universe.value.api(`${universe.value.characterPath}/${route.params.character}`)
  character.value = universe.value.mapCharacter(data.value)
}
</script>

<template>
  <div class="py-8">
    <UContainer>
      <div class="container mx-auto">
        <p>
          <NuxtLink :to="`/${universe?.route}`">
            Back to {{ universe?.name }}
          </NuxtLink>
        </p>
        <h1 v-if="character" class="text-4xl font-bold mb-8">
          {{ character.name }}
        </h1>
      </div>
    </UContainer>
  </div>
</template>

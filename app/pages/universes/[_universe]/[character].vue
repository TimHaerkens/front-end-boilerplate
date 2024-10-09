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
        <div v-if="character" class="grid grid-cols-1 md:grid-cols-2 gap-8 m-auto lg:max-w-[80%]">
          <div class="bg-gray-100 p-4 w-[20rem] h-[20rem]">
            <img :src="character.image" :alt="character.name" class="w-full rounded-lg">
          </div>
          <div>
            <p class="text-lg">
              {{ character }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

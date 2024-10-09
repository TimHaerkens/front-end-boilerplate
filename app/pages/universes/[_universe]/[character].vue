<script setup lang="ts">
import { useRoute } from 'vue-router'
import CharacterImage from '~/components/Application/Character/CharacterImage.vue'
import CharacterProperties from '~/components/Application/Character/CharacterProperties.vue'
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
        <div v-if="character" class="grid grid-cols-1 md:grid-cols-2  gap-8 m-auto lg:max-w-[80%]">
          <div class="rounded-md bg-gray-100 p-4 w-[20rem] h-auto">
            <CharacterImage :image="character.image" :images="character.images ?? null" />
          </div>
          <div class="grid grid-cols-1 gap-8">
            <div class="rounded-xl bg-gray-200 p-8 backdrop-blur backdrop-opacity-80">
              <!-- Main Properties -->
              <CharacterProperties :properties="character.main_properties" />
            </div>

            <div class="rounded-xl bg-blue-100 p-8 backdrop-blur backdrop-opacity-80">
              <!-- Extra Properties -->
              <CharacterProperties :properties="character.extra_properties" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

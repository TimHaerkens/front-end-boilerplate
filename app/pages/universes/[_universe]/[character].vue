<script setup lang="ts">
import { useRoute } from 'vue-router'
import LoadingPlaceholder from '~/components/Application/Base/LoadingPlaceholder.vue'
import CharacterImage from '~/components/Application/Character/CharacterImage.vue'
import CharacterProperties from '~/components/Application/Character/CharacterProperties.vue'
import { universes } from '~/data/universes'
import type { Universe } from '~/types/Universe'

const route = useRoute()
const character = ref<any | null>(null)

const state = reactive({
  loading: false,
})

const universe = computed<Universe | null>(() => {
  return universes.find(universe => universe.route === `universes/${route.params._universe}`) ?? null
})

watchEffect(() => {
  if (universe.value) {
    fetchCharacter(universe.value)
  }
})

async function fetchCharacter(universe: Universe) {
  state.loading = true
  if (!universe) {
    return
  }
  const data = await universe.fetch(`${universe.characterPath}/${route.params.character}`)
  if (data) {
    character.value = universe.mapCharacter(data)
  }
  state.loading = false
}
</script>

<template>
  <div class="py-8">
    <UContainer>
      <div class="container mx-auto">
        <p>
          <NuxtLink :to="`/${universe?.route}`" class="back-link">
            Back to {{ universe?.name }}
          </NuxtLink>
        </p>
        <LoadingPlaceholder v-if="state.loading" width="14rem" class="mb-8" />
        <h1 v-else-if="character" class="text-4xl font-bold mb-8">
          {{ character.name }}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2  gap-8 m-auto lg:max-w-[80%]">
          <div class="rounded-md bg-gray-100 p-4 w-[20rem] lg:w-full h-auto">
            <LoadingPlaceholder v-if="state.loading" width="14rem" height="14rem" class="m-auto" />
            <CharacterImage v-else-if="character" :image="character.image" :images="character.images ?? null" />
          </div>
          <div class="grid grid-cols-1 gap-8">
            <div class="rounded-xl bg-gray-200 p-8 backdrop-blur backdrop-opacity-80">
              <!-- Main Properties -->
              <LoadingPlaceholder v-if="state.loading" width="14rem" />
              <CharacterProperties v-else-if="character" :properties="character.main_properties" />
            </div>

            <div class="rounded-xl bg-blue-100 p-8 backdrop-blur backdrop-opacity-80">
              <!-- Extra Properties -->
              <LoadingPlaceholder v-if="state.loading" width="14rem" />
              <CharacterProperties v-else-if="character" :properties="character.extra_properties" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

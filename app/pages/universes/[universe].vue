<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CharacterCard from '~/components/Application/Universe/CharacterCard.vue'
import GridListToggle from '~/components/Application/Universe/GridListToggle.vue'
import Pagination from '~/components/Application/Universe/Pagination.vue'
import { universes } from '~/data/universes'
import { useUserSettingsStore } from '~/stores/userSettingsStore'
import type { Character } from '~/types/Character'

const route = useRoute()
const router = useRouter()

const state = reactive({
  currentPage: 1,
  pages: 1,
})

const characters = ref<Character[]>([])

const universe = computed(() => {
  return universes.find(universe => universe.route === `universes/${route.params.universe}`)
})

async function loadCharacters() {
  const { data } = await universe.value?.api(`${universe.value.characterPath}${universe.value.pagination(state.currentPage)}`)
  state.pages = universe.value?.pages(data.value) ?? 1
  characters.value = universe.value?.mapData(data.value) ?? []
}

if (universe.value) {
  loadCharacters()
}

const userSettingsStore = useUserSettingsStore()
const viewType = computed(() => userSettingsStore.viewType)

onBeforeMount(() => {
  if (!universe.value) {
    router.push('/universes/404')
  }
})

watchEffect(() => {
  loadCharacters()
})
</script>

<template>
  <div class="py-8">
    <UContainer>
      <div class="container mx-auto">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <NuxtLink to="/">
              Back to universes
            </NuxtLink>
            <h1 class="text-4xl font-bold mb-8">
              {{ universe?.name }}
            </h1>
          </div>
          <GridListToggle />
        </div>
        <div class="w-full mb-8">
          <Pagination v-model="state.currentPage" :pages="state.pages" />
        </div>
        <div
          :class="[
            { 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4': viewType === 'grid' },
            { 'grid grid-cols-1 gap-2': viewType === 'list' },
          ]"
        >
          <CharacterCard v-for="character in characters" :key="character.name" :character="character" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

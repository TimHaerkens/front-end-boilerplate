<script setup lang="ts">
import { useUserSettingsStore } from '~/stores/userSettingsStore'
import type { ViewType } from '~/types/ViewType'

const userSettingsStore = useUserSettingsStore()
const viewType = computed(() => userSettingsStore.viewType)

function toggleView(view: ViewType) {
  userSettingsStore.setViewType(view)
}
</script>

<template>
  <div class="items-center space-x-4 hidden sm:flex">
    <button
      v-for="view in ['grid', 'list'] as ViewType[]"
      :key="view"
      :class="{ 'bg-blue-500 text-white': viewType === view }"
      class="px-4 py-2 border rounded-md"
      @click="toggleView(view)"
    >
      {{ formatKey(view) }} View
    </button>
  </div>
</template>

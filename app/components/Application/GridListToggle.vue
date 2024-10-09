<script setup lang="ts">
import { useUserSettingsStore } from '~/stores/userSettingsStore'

const userSettingsStore = useUserSettingsStore()
const viewType = computed(() => userSettingsStore.viewType)

function toggleView(view: 'grid' | 'list') {
  userSettingsStore.setViewType(view)
}
</script>

<template>
  <div class="items-center space-x-4 hidden sm:flex">
    <button
      :class="{ 'bg-blue-500 text-white': viewType === 'grid' }"
      class="px-4 py-2 border rounded-md"
      @click="toggleView('grid')"
    >
      Grid View
    </button>
    <button
      :class="{ 'bg-blue-500 text-white': viewType === 'list' }"
      class="px-4 py-2 border rounded-md"
      @click="toggleView('list')"
    >
      List View
    </button>
  </div>
</template>

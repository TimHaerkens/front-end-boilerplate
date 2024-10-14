<script setup lang="ts">
import type { Universe } from '~/types/Universe'

interface Props {
  universe: Universe
}

const props = defineProps<Props>()
</script>

<template>
  <NuxtLink :to="props.universe.route">
    <div
      class="cursor-pointer p-4 border rounded-lg shadow-md hover:bg-gray-100 md:h-50 flex flex-col md:gap-2 justify-between"
    >
      <div>
        <h2 class="text-2xl font-bold mb-2 text-center">
          {{ props.universe.name }}
        </h2>
        <p class="text-gray-600 text-center">
          {{ props.universe.description }}
        </p>
      </div>

      <div v-if="props.universe.image" class="w-full h-24 flex justify-center">
        <img
          :src="props.universe.image"
          alt="Universe image"
          class="m-auto rounded-lg w-24"
        >
      </div>
    </div>
  </NuxtLink>
</template>

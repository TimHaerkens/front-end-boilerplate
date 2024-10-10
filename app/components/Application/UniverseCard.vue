<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  name: string
  description?: string
  route: string
  image?: string
}

const props = defineProps<Props>()
</script>

<template>
  <NuxtLink :to="props.route">
    <div
      class="cursor-pointer p-4 border rounded-lg shadow-md hover:bg-gray-100"
    >
      <h2 class="text-2xl font-bold mb-2 text-center">
        {{ props.name }}
      </h2>
      <p class="text-gray-600 text-center">
        {{ props.description }}
      </p>
    </div>
  </NuxtLink>
</template>

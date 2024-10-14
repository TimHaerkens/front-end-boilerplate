<script setup lang="ts">
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
      class="cursor-pointer p-4 border rounded-lg shadow-md hover:bg-gray-100 md:h-50 flex flex-col md:gap-2 justify-between"
    >
      <div>
        <h2 class="text-2xl font-bold mb-2 text-center">
          {{ props.name }}
        </h2>
        <p class="text-gray-600 text-center">
          {{ props.description }}
        </p>
      </div>

      <div v-if="props.image" class="w-full h-24 flex justify-center">
        <img
          :src="props.image"
          alt="Universe image"
          class="m-auto rounded-lg w-24"
        >
      </div>
    </div>
  </NuxtLink>
</template>

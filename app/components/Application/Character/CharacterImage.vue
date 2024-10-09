<script setup lang="ts">
const props = defineProps<{
  image: string
  images: object | null
}>()

const selectedImage = ref<string>(props.image)

function selectImage(image: string) {
  selectedImage.value = image
}

// remove images that have null as value
const filteredImages = computed(() => {
  return Object.values(props.images).filter((img: string) => img !== null && typeof img === 'string')
})
</script>

<template>
  <img :src="selectedImage" class="w-full rounded-lg">
  <div v-if="images !== null" class="grid grid-cols-4 gap-4 mt-4">
    <div v-for="img in filteredImages" :key="img" class="rounded-lg cursor-pointer hover:border-2 hover:border-blue-200" :class="[{ 'border-2 border-blue-300': selectedImage === img }]">
      <img
        :src="img"
        @click="selectImage(img)"
      >
    </div>
  </div>
</template>

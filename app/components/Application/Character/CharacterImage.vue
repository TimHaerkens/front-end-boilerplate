<script setup lang="ts">
const props = defineProps<{
  image: string | null
  images: { name: string, src: string }[] | null
}>()

const selectedImage = ref<string>(props.image)

function selectImage(image: string) {
  selectedImage.value = image
}
</script>

<template>
  <img
    v-if="image !== null"
    :src="selectedImage"
    class="h-[20rem] m-auto  rounded-lg"
    :class="[{ 'mb-20': images !== null }]"
  >
  <div v-else class="text-center">
    <p>No image available</p>
  </div>
  <div v-if="images !== null" class="grid grid-cols-4 gap-4 mt-4">
    <div
      v-for="img in props.images" :key="img.name"
      class="rounded-lg cursor-pointer border-separate hover:border-2 hover:border-blue-200 flex flex-col justify-between"
      :class="[{ 'border-2 border-blue-300': selectedImage === img }]"
    >
      <img
        class="w-full rounded-lg"
        :src="img.src"
        @click="selectImage(img.src)"
      >
      <span class="text-xs text-center italic block">{{ formatKey(img.name) }}</span>
    </div>
  </div>
</template>

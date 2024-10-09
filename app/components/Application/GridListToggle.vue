<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

function toggleView(view: string) {
  emit('update:modelValue', view)
}
</script>

<template>
  <div class="items-center space-x-4 hidden sm:flex">
    <button
      :class="{ 'bg-blue-500 text-white': modelValue === 'grid' }"
      class="px-4 py-2 border rounded-md"
      @click="toggleView('grid')"
    >
      Grid View
    </button>
    <button
      :class="{ 'bg-blue-500 text-white': modelValue === 'list' }"
      class="px-4 py-2 border rounded-md"
      @click="toggleView('list')"
    >
      List View
    </button>
  </div>
</template>

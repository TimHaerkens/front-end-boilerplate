<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue'])

const computedPages = computed(() => {
  const start = Math.max(1, props.modelValue - 2 - Math.max(0, 2 - props.pages + props.modelValue))
  const end = Math.max(5, Math.min(props.pages, props.modelValue + 2))
  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
})

function prevPage() {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1)
  }
}

function nextPage() {
  emit('update:modelValue', props.modelValue + 1)
}
</script>

<template>
  <div class="flex justify-end space-x-4">
    <button
      :disabled="modelValue === 1"
      class="px-4 py-2 border rounded-md bg-white"
      :class="{ 'opacity-50': modelValue === 1 }"
      @click="emit('update:modelValue', 1)"
    >
      First
    </button>
    <button
      :disabled="modelValue === 1"
      class="px-4 py-2 border rounded-md bg-white"
      :class="{ 'opacity-50': modelValue === 1 }"
      @click="prevPage"
    >
      Previous
    </button>
    <button
      v-for="page in computedPages" :key="page"
      class="px-4 py-2 border rounded-md bg-white w-[4rem]"
      :class="{ '!bg-blue-500 text-white': modelValue === page }"
      @click="emit('update:modelValue', page)"
    >
      {{ page }}
    </button>
    <button
      :disabled="modelValue === pages"
      class="px-4 py-2 border rounded-md bg-white"
      :class="{ 'opacity-50': modelValue === pages }"
      @click="nextPage"
    >
      Next
    </button>
    <button
      :disabled="modelValue === pages"
      class="px-4 py-2 border rounded-md bg-white"
      :class="{ 'opacity-50': modelValue === pages }"
      @click="emit('update:modelValue', pages)"
    >
      Last
    </button>
  </div>
</template>

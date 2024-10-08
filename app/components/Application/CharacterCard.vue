<script setup lang="ts">
import type { Character } from '~/types/Character'

interface Props {
  character: Character
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="character.url">
    <div class="cursor-pointer p-4 border rounded-lg shadow-md hover:bg-gray-100">
      <h2 class="text-2xl font-bold mb-2 text-center">
        {{ character.name }}
      </h2>
    </div>
  </NuxtLink>
</template>

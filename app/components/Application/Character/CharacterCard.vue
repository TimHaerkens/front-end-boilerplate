<script setup lang="ts">
import type { Character } from '~/types/Character'

interface Props {
  viewType: 'list' | 'grid'
  character: Character
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="character.url">
    <div
      class="cursor-pointer p-4 border hover:bg-gray-100 transition ease-in-out hover:-translate-y-2"
      :class="[
        { 'rounded-lg shadow-md w-56 h-56 flex flex-col gap-2': viewType === 'grid' },
        { 'w-full flex flex-row gap-4': viewType === 'list' },
      ]"
    >
      <img
        :src="character.image ?? '/images/avatar.png'"
        alt="Character image"
        :class="[
          { 'm-auto rounded-lg w-40 h-40': viewType === 'grid' },
          { 'w-24 h-24 ': viewType === 'list' },
          { 'opacity-30': character.image === null },
        ]"
        class="  "
      >
      <h2
        :class="[
          { 'text-xl font-bold mb-2 text-center': viewType === 'grid' },
          { 'text-2xl font-bold mb-2': viewType === 'list' },
        ]"
      >
        {{ character.name }}
      </h2>
    </div>
  </NuxtLink>
</template>

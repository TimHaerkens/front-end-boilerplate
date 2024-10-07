<script setup lang="ts">
import UniverseCard from '~/components/Application/UniverseCard.vue'
import { universes } from '~/data/universes'
</script>

<template>
  <div class="py-8">
    <UContainer>
      <header class="mb-8 py-2">
        <h1 class="uppercase text-center text-3xl">
          Welcome to Placeholder
        </h1>
        <p class="text-center">
          On this website you can find your favorite characters from <strong>{{ universes.length }}</strong> different universes.
        </p>
      </header>

      <div class="mb-8 grid gap-4 xl:grid-cols-2 w-fit m-auto">
        <UniverseCard
          v-for="universe in universes"
          :key="universe.name"
          :name="universe.name"
          :description="universe.description"
          :route="universe.route"
          :image="universe.image"
        />
      </div>
    </UContainer>
  </div>
</template>

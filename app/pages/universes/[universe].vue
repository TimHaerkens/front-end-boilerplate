<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { universes } from '~/data/universes'

const route = useRoute()
const router = useRouter()

const universe = computed(() => {
  return universes.find(universe => universe.route === `universes/${route.params.universe}`)
})

onBeforeMount(() => {
  if (!universe.value) {
    router.push('/universes/404')
  }
})
</script>

<template>
  <div class="py-8">
    <UContainer>
      <div class="container mx-auto">
        <p>
          <NuxtLink to="/">
            Back to universes
          </NuxtLink>
        </p>
        <h1 class="text-4xl font-bold mb-8">
          {{ universe?.name }}
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <span>Character</span>
          <span>Character</span>
          <span>Character</span>
          <span>Character</span>
          <span>Character</span>
        </div>
      </div>
    </UContainer>
  </div>
</template>

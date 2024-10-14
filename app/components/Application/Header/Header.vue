<script setup lang="ts">
const config = useRuntimeConfig()
const appTitle = config.public.appName || 'App'
const githubUrl = config.public.githubUrl || ''
</script>

<template>
  <header class="bg-zinc-100 border-b border-b-zinc-200 dark:bg-zinc-700 dark:border-b-zinc-600 py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2">
          <li>
            <ApplicationHeaderLink to="/" :label="appTitle" />
          </li>
        </ul>
      </nav>
      <div v-if="githubUrl" class="ml-auto">
        <UButton :to="githubUrl" icon="mdi:github" color="blue" label="GitHub repository" variant="outline" />
      </div>
    </UContainer>
  </header>
</template>

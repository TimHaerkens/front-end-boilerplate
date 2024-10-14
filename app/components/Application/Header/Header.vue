<template>
  <header class="bg-zinc-100 border-b border-b-zinc-200 dark:bg-zinc-700 dark:border-b-zinc-600 py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2">
          <li>
            <ApplicationHeaderLink to="/" label="Pro DB" />
          </li>
        </ul>
      </nav>
      <div class="ml-auto">
        <UButton to="https://github.com/timhaerkens/front-end-boilerplate" icon="mdi:github" color="blue" label="GitHub repository" variant="outline" />
      </div>
    </UContainer>
  </header>
</template>

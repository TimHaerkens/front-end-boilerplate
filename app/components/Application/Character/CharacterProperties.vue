<script setup lang="ts">
defineProps<{
  properties: Record<string, any> // The properties object (either main or extra)
}>()

function formatKey(str: string | number): string {
  str = str.toString()
  str = str.replace(/_/g, ' ')
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function unit(key: string): string {
  switch (key) {
    case 'height':
      return 'cm'
    case 'mass': case 'weight':
      return 'kg'
    default:
      return ''
  }
}
</script>

<template>
  <div class="grid grid-cols-2 gap-6">
    <div v-for="(property, key) in properties" :key="key">
      <div class="text-lg">
        {{ formatKey(key) }}
      </div>
      <div class="font-bold text-xl">
        <span v-if="typeof property === 'object'">
          <span v-for="(prop, k) in property" :key="k">
            {{ prop }}<span v-if="k !== property.length - 1">, </span>
          </span>
        </span>
        <span v-else>
          {{ property }} {{ unit(key.toString()) }}
        </span>
      </div>
    </div>
  </div>
</template>

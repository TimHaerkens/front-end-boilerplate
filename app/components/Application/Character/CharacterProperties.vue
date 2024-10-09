<script setup lang="ts">
import { formatKey } from '~/utils/formatKey'

defineProps<{
  properties: Record<string, any> // The properties object (either main or extra)
}>()

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

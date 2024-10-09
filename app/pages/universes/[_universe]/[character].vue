<script setup lang="ts">
import { useRoute } from 'vue-router'
import { universes } from '~/data/universes'

const route = useRoute()
const character = ref<any | null>(null)

const universe = computed(() => {
  return universes.find(universe => universe.route === `universes/${route.params._universe}`) ?? null
})

if (universe.value) {
  const { data } = await universe.value.api(`${universe.value.characterPath}/${route.params.character}`)
  character.value = universe.value.mapCharacter(data.value)
}

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
  <div class="py-8">
    <UContainer>
      <div class="container mx-auto">
        <p>
          <NuxtLink :to="`/${universe?.route}`">
            Back to {{ universe?.name }}
          </NuxtLink>
        </p>
        <h1 v-if="character" class="text-4xl font-bold mb-8">
          {{ character.name }}
        </h1>
        <div v-if="character" class="grid grid-cols-1 md:grid-cols-2  gap-8 m-auto lg:max-w-[80%]">
          <div class="rounded-md  bg-gray-100 p-4 w-[20rem] h-[20rem]">
            <img :src="character.image" :alt="character.name" class="w-full rounded-lg">
          </div>
          <div class="grid grid-cols-1 gap-8">
            <div class="rounded-xl bg-gray-200 p-8 backdrop-blur backdrop-opacity-80">
              <div class="grid grid-cols-2 gap-6">
                <div v-for="(property, key) in character.main_properties" :key="key">
                  <div class="text-lg">
                    {{ formatKey(key) }}
                  </div>
                  <div class="font-bold text-xl">
                    {{ property }} {{ unit(key.toString()) }}
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-xl bg-blue-100 p-8 backdrop-blur backdrop-opacity-80">
              <div class="grid grid-cols-2 gap-6">
                <div v-for="(property, key) in character.extra_properties" :key="key">
                  <div class="text-lg">
                    {{ formatKey(key) }}
                  </div>
                  <div class="font-bold text-xl">
                    <span v-if=" typeof property === 'object'">
                      <span v-for="prop, k in property" :key="k">
                        {{ prop }}<span v-if="k !== property.length - 1">, </span>
                      </span>
                    </span>
                    <span v-else>
                      {{ property }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<template>
  <!-- <header class="border-b-2"> -->
  <header class="border-b-2 fixed top-0 right-0 left-0 bg-white">
    <div class="container mx-auto">
      <div class="flex w-full py-3">
        <RouterLink class="w-72 flex items-center justify-start" to="/" @click="dogStore.selected = dogStore.startSelected">
          <div class="flex cursor-pointer"><IconSprite class="mx-1" name="paw" />DOGGIE<IconSprite class="mx-1" name="paw" /></div>
        </RouterLink>

        <BaseSelect :options="dogBreedOptions" />
        <div class="w-72 flex items-center justify-end">
          <RouterLink to="/favorite">
            <div class="relative">
              <IconSprite class="mx-1" name="favourite" />
              <div
                v-if="dogStore.favoritesCount"
                class="absolute -top-2 -right-2 rounded-full bg-slate-400 w-5 h-5 flex justify-center text-xs text-white font-bold"
              >
                {{ dogStore.favoritesCount }}
              </div>
            </div></RouterLink
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { useDogsStore } from '../stores/dogs'

const dogStore = useDogsStore()

const url = 'https://dog.ceo/api/breeds/list/all'

const { data } = useFetch(url).json()

const dogBreedOptions = computed(() => data.value && Object.keys(data.value.message))
</script>

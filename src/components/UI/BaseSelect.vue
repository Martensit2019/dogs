<template>
  <select
    id="select"
    v-model="dogStore.selected"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected>Select or Search for a Dog Breed...</option>
    <option v-for="option in options" :value="option" :key="option">{{ option.toUpperCase() }}</option>
  </select>
</template>

<script setup lang="ts">
import { useDogsStore } from '../../stores/dogs'

const dogStore = useDogsStore()

interface IProps {
  options: string[]
}

defineProps<IProps>()
</script>

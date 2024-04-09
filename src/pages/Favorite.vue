<template>
  <ListBreeds :notData="!dataBreeds.length" notDataText="На данный момент в избранное ничего не добавлено" :dataBreeds="dataBreeds" />
</template>

<script setup lang="ts">
import { createBreedsData } from '../helpers/strToObj'
import { useDogsStore } from '../stores/dogs'
const dogStore = useDogsStore()

const dataBreeds = computed(() => dogStore.favorites && createBreedsData(dogStore.favorites))
</script>

<style scoped></style>

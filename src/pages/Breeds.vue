<template>
  <ListBreeds :notData="isFetching" notDataText="Loading..." :dataBreeds="dataBreeds" />
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { useDogsStore } from '../stores/dogs'
import { createBreedsData } from '../helpers/strToObj';
const { params } = useRoute()
const dogStore = useDogsStore()
dogStore.selected = params.breed as unknown as string

const url = computed(() => `https://dog.ceo/api/breed/${dogStore.selected || params.breed}/images/random/20`)

const { isFetching, error, data } = useFetch(url, { refetch: true }).json()

const dataBreeds = computed(() => data.value && createBreedsData(data.value.message))
</script>

<style scoped></style>

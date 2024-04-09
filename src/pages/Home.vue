<template>
  <ListBreeds :notData="isFetching" notDataText="Loading..." :dataBreeds="dataBreeds" />
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { useDogsStore } from '../stores/dogs'
import { createBreedsData } from '../helpers/strToObj'

const router = useRouter()
const dogStore = useDogsStore()
const url = 'https://dog.ceo/api/breeds/image/random/20'

const { isFetching, error, data } = useFetch(url).json()

const dataBreeds = computed(() => data.value && createBreedsData(data.value.message))
</script>

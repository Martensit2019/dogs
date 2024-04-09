<template>
    <TheHeader />
    <div class="mt-20">
       <router-view />
    </div>
</template>

<script setup lang="ts">
import { useDogsStore } from './stores/dogs';
const dogStore = useDogsStore()

const getFavotites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites') as string)
  if(favorites) dogStore.favorites = [...favorites]
}
getFavotites()
</script>

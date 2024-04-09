<template>
  <div class="hover:cursor-pointer p-1 border" >
    <div class="flex h-72 overflow-hidden">
      <img
        class="object-cover w-full"
        :src="card.img"
        @click="dogStore.addToFavorite(card.img)"
      />
    </div>
    <div class="flex p-4 justify-between">
      <div class="font-bold">{{ card.breed.toUpperCase() }}</div>
      <IconSprite class="mx-1" :name="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDogsStore } from '../stores/dogs'

interface ICard {
  id: number
  breed: string
  img: string
}
interface IProps {
  card: ICard
}
const props = defineProps<IProps>()
const dogStore = useDogsStore()

const icon = computed(() => dogStore.favorites.includes(props.card.img) ? 'favourite-card' : 'favourite')

</script>

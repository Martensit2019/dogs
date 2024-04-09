<template>
  <div class="container mx-auto">
    <div v-if="notData">{{ notDataText }}</div>
    <div v-else class="grid grid-cols-4 gap-4 my-4">
      <Card v-for="breed in dataBreeds" :card="breed" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ICard {
  id: number
  breed: string
  img: string
}
interface IProps {
  notData: boolean
  notDataText: string
  dataBreeds: ICard[]
}
defineProps<IProps>()
</script>
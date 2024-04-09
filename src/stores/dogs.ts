import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface ICard {
  id: number
  breed: string
  img: string
}

export const useDogsStore = defineStore('dogs', () => {
  const router = useRouter()

  const startSelected = 'Select or Search for a Dog Breed...'
  const favFromLS = Boolean(localStorage.getItem('favorites')) ? localStorage.getItem('favorites') : []

  // console.log('favFromLS', favFromLS);
  
  

  const selected = ref<string>('Select or Search for a Dog Breed...')
  const favorites = ref<string[]>([])

  const favoritesCount = computed(() => favorites.value.length)

  const addToFavorite = (strImg: string) => {
    if (favorites.value.includes(strImg)) {
      favorites.value = favorites.value.filter((str) => str !== strImg)
    } else {
      favorites.value.push(strImg)
    }
  }

  watch(
    () => selected.value,
    (val) => {
      val === startSelected ? router.push('/') : router.push({ name: 'breeds', params: { breed: val } })
    }
  )
  watch(
    () => favoritesCount.value,
    (val) => {
      val ? localStorage.setItem('favorites', JSON.stringify(favorites.value)) : localStorage.removeItem('favorites')
    }
  )

  return { startSelected, selected, favorites, favoritesCount, addToFavorite }
})

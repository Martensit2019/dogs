<template>
  <svg :id="id" :width="width" :height="height" :viewBox="viewBox" class="icon-sprite">
    <use :href="href" />
  </svg>
</template>

<script setup lang="ts">
export interface IconSpriteProps {
  name: string
  id?: string
  width?: number
  prefix?: string
  height?: number
  viewBox?: string
}

const props = withDefaults(defineProps<IconSpriteProps>(), {
  width: 24,
  height: 24,
  prefix: 'icon',
  viewBox: '0 0 24 24'
})
const href = computed(() => `#${props.prefix}-${props.name}`)
</script>
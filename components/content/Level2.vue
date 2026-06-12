<template>
  <CraftingRecipe
    title="Level 2 Template"
    :grid="grid"
    :output="output"
  />
</template>

<script setup>
const diamond = { name: 'Diamond', image: '/images/items/diamond.png', count: 32 }
const p = { name: 'p', image: '/images/items/p.png', }
const 1 = { name: '1', image: '/images/items/1.png', }

const grid = [
  p, 1, p,
  1, diamond,    1,
  p, 1, p,
]

const output = {
  name: 'Your Custom Item',
  image: '/images/items/2.png',
  count: 1,
}
</script>

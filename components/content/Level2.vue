<template>
  <CraftingRecipe
    title="Level 2 Template"
    :grid="grid"
    :output="output"
  />
</template>

<script setup>
const diamond = { name: 'Diamond', image: '/images/items/diamond.png', count: 32 }
const n = { name: 'Ender Eye', image: '/images/items/n.png', }
const 1 = { name: 'Ender Eye', image: '/images/items/1.png', }

const grid = [
  n, 1, n,
  1, diamond,    1,
  n, 1, n,
]

const output = {
  name: 'Your Custom Item',
  image: '/images/items/2.png',
  count: 1,
}
</script>

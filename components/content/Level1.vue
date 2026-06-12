<template>
  <CraftingRecipe
    title="Level 1 Template"
    :grid="grid"
    :output="output"
  />
</template>

<script setup>
const diamond = { name: 'Diamond', image: '/images/items/diamond.png', count: 16 }
const eye = { name: 'Ender Eye', image: '/images/items/eye.png', }
const n = { name: 'n', image: '/images/items/n.png', }

const grid = [
  diamond, n, diamond,
  n, eye,    n,
  diamond, n, diamond,
]

const output = {
  name: 'Your Custom Item',
  image: '/images/items/1.png',
  count: 1,
}
</script>

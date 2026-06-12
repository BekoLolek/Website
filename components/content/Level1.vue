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

const grid = [
  diamond, null, diamond,
  null, eye,    null,
  diamond, null, diamond,
]

const output = {
  name: 'Your Custom Item',
  image: '/images/items/your-item.png',
  count: 1,
}
</script>

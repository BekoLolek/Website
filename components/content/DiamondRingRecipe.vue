<template>
  <CraftingRecipe
    title="Diamond Ring"
    :grid="grid"
    :output="output"
  />
</template>

<script setup>
const diamond = { name: 'Diamond', image: '/images/items/diamond.png' }

const grid = [
  diamond, diamond, diamond,
  diamond, null,    diamond,
  diamond, diamond, diamond,
]

const output = {
  name: 'Your Custom Item',
  image: '/images/items/your-item.png',
  count: 1,
}
</script>

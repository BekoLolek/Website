<template>
  <CraftingRecipe
    title="Level 3 Template"
    :grid="grid"
    :output="output"
  />
</template>

<script setup>
const netherite_ingot = { name: 'Netherite Ingot', image: '/images/items/netherite_ingot.png', }
const eye = { name: 'Ender Eye', image: '/images/items/eye.png', }
const num2 = { name: '2', image: '/images/items/2.png', }

const grid = [
  netherite_ingot, num2, netherite_ingot,
  num2, eye, num2,
  netherite_ingot, num2, netherite_ingot,
]

const output = {
  name: 'Your Custom Item',
  image: '/images/items/3.png',
  count: 1,
}
</script>

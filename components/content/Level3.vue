<template>
  <CraftingRecipe
    title="Level 3 Template"
    :grid="grid"
    :output="output"
  />
</template>

<script setup>
const netherite_ingot = { name: 'Netherite Ingot', image: '/images/items/diamond.png', }
const eye = { name: 'Ender Eye', image: '/images/items/eye.png', }
const 2 = { name: '2', image: '/images/items/2.png', }

const grid = [
  netherite_ingot, 2, netherite_ingot,
  2, eye,    2,
  netherite_ingot, 2, netherite_ingot,
]

const output = {
  name: 'Your Custom Item',
  image: '/images/items/3.png',
  count: 1,
}
</script>

<template>
  <div class="p-4 bg-gray-950/30 rounded-lg flex items-center border border-gray-800 shadow-lg">
    <div class="text-center w-full">
      <div class="text-gray-300 text-3xl mb-2">
        <font-awesome-icon :icon="props.icon" />
      </div>
      <h4 class="text-lg text-gray-200 font-semibold mb-1">{{ props.title }}</h4>
      <p class="text-gray-400"><slot /></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['title', 'icon']);
</script>
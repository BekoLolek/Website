<template>
  <button type="button" class="bg-primary-500 hover:bg-primary-600 px-5 py-3 focus:outline-none text-white focus:ring-4 font-semibold rounded-full text-sm focus:ring-primary-300 flex items-center space-x-2">
    <span v-if="props.icon"><font-awesome-icon :icon="props.icon" /></span>
    <span><slot /></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps(['icon']);
</script>
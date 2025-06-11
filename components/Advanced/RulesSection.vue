<template>
  <section class="mb-10">
    <h2 class="text-gray-200 text-3xl mb-4">{{ props.title }}</h2>
    <ol class="text-gray-400 text-lg space-y-1 list-decimal list-inside">
      <slot />
    </ol>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps(['title']);
</script>
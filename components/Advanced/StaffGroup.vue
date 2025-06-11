<template>
  <section>
    <h2 class="text-3xl text-gray-200 mb-6">{{ props.title }}</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps(['title']);
</script>

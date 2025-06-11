<template>
  <div class="bg-gray-950/30 rounded-lg h-40 flex p-4 border border-gray-800">
    <div class="bg-gray-950/50 p-4 rounded-full aspect-square overflow-hidden me-6">
      <img class="translate-y-4 scale-125" :src="'https://visage.surgeplay.com/bust/' + props.name + '.webp'" :alt="props.name + ' avatar'">
    </div>

    <div class="my-auto">
      <h4 class="text-gray-200 text-2xl mb-3">{{ props.name }}</h4>
      <span class="text-white px-2.5 py-1 rounded-lg font-semibold" :style="{'backgroundColor': props.color}">{{ props.rank }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['name', 'rank', 'color']);
</script>
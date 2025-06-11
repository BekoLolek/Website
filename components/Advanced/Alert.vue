<template>
  <div v-if="props.pages.length === 0 || matchesConditions" class="border-gray-800 border rounded-lg overflow-hidden">
    <div class="px-7 py-4 bg-gray-950/30 flex items-center justify-center border-s-8" :style="{'border-left-color': props.color}">
      <div v-if="props.icon" class="text-4xl text-gray-400 me-5">
        <font-awesome-icon :icon="props.icon" />
      </div>

      <div>
        <div class="text-gray-200 text-lg mb-1">{{ props.title }}</div>
        <div class="text-gray-400"><slot /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['icon', 'color', 'title', 'pages']);

const route = useRoute();

const matchesConditions = computed(() => {
  return props.pages.some((path: string)=> {
    if (path === '/') return route.path === '/';

    return route.path.startsWith(path);
  });
});
</script>
<template>
  <ul>
    <li v-for="(item, index) in props.items" :key="item._path">
      <template v-if="item.children && item.children.length > 0">
        <div class="flex items-center mb-2 text-gray-200 cursor-pointer" @click="emitToggleCategory(index)">
          <span>{{ item.title }}</span>
          <font-awesome-icon :icon="!props.closedCategories.includes(index) ? 'fa-chevron-up' : 'fa-chevron-down'" class="ml-auto text-xs text-gray-500" />
        </div>

        <ul v-if="!props.closedCategories.includes(index)" class="ml-5 mb-2">
          <RecursiveNav @toggleCategory="emitToggleCategory" :items="item.children" :closed-categories="props.closedCategories" />
        </ul>
      </template>

      <template v-else>
        <NuxtLink :class="{ 'text-primary-500 font-semibold': isActive(item._path), 'text-gray-400 hover:text-gray-200': !isActive(item._path) }" class="inline-block mb-1" :to="item._path">{{ item.title }}</NuxtLink>
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps(['closedCategories', 'items'])

const emit = defineEmits(['toggleCategory']);

const route = useRoute();

const emitToggleCategory = (index: number) => {
  emit('toggleCategory', index)
}

function isActive(path: string): boolean {
  return route.path === path;
}
</script>

<template>
  <div v-if="results.length > 0">
    <ul class="space-y-2 mb-4">
      <NuxtLink :to="result.id" v-for="result in results" :key="result.id" class="block" @click="emitClearSearch">
        <li class="p-4 rounded-lg bg-gray-950/30 hover:bg-gray-800 cursor-pointer">
          <h3 class="font-bold text-gray-200 mb-1">{{ result.title }}</h3>
          <p class="text-gray-400">{{ result.content }}</p>
        </li>
      </NuxtLink>
    </ul>
  </div>

  <div v-else-if="props.search.length > 0" class="text-gray-400 mb-4">
    No results found.
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['search']);
const emit = defineEmits(['clearSearch']);

const searchQuery = ref(props.search);

watch(
  () => props.search,
  (newSearch) => {
    searchQuery.value = newSearch
  }
)

const emitClearSearch = () => {
  emit('clearSearch');
}

const results = await searchContent(searchQuery);
</script>
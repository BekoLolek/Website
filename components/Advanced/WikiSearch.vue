<template>
  <div class="px-6 sm:px-0">
    <div class="flex items-center relative mb-4">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="absolute left-5 text-gray-500 pointer-events-none" />
      <input ref="searchInput" type="text" placeholder="Search..." class="block bg-gray-950/30 rounded-xl w-full border-0 pl-11 pr-10 py-4 placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-0" @input="updateSearch" />

      <button v-if="search" @click="clearSearch" class="absolute right-4 text-gray-500 hover:text-gray-300">
        <font-awesome-icon icon="fa-solid fa-times" title="Clear search" />
      </button>
    </div>

    <WikiSearchResults v-if="search" :search="search" @clearSearch="clearSearch" />
  </div>
</template>

<script lang="ts" setup>
const search = ref('');
const searchInput = ref<HTMLInputElement | null>(null);

const updateSearch = () => {
  search.value = searchInput.value?.value || '';
};

const clearSearch = () => {
  search.value = '';

  if (searchInput.value) {
    searchInput.value.value = '';
    searchInput.value.focus();
  }
};
</script>

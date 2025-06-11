<template>
  <div class="mb-8">
    <h2 class="text-gray-200 text-3xl text-center mb-6">{{ props.title }}</h2>

    <div class="flex justify-center mb-6">
      <button @click="period = 'monthly'" :class="['px-4 py-2', period === 'monthly' ? 'bg-primary-500 text-white' : 'bg-gray-700 text-gray-200']">
        Monthly
      </button>
      <button @click="period = 'weekly'" :class="['px-4 py-2', period === 'weekly' ? 'bg-primary-500 text-white' : 'bg-gray-700 text-gray-200']">
        Weekly
      </button>
    </div>
      
    <ul class="max-w-sm mx-auto">
      <li v-for="(player, index) in players" :key="player.name" class="flex items-center justify-between py-3 border-b border-gray-800">
        <div class="flex items-center">
          <span class="text-gray-400 text-lg mr-6 font-bold">{{ index + 1 }}.</span>
          <img :src="'https://mc-heads.net/avatar/' + player.name" :alt="player.name + ' avatar'" class="h-10 w-10 rounded-full" />
          <span class="text-gray-400 text-lg ml-4 font-semibold">{{ player.name }}</span>
        </div>
        <span class="text-gray-400 text-md font-semibold">{{ player.votes }} votes</span>
      </li>
    </ul>

    <div v-if="status === 'pending' && !players" class="text-center text-gray-400 text-lg">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500 text-lg">Error loading data.</div>
    <div v-else-if="players?.length === 0" class="text-center text-gray-400 text-lg">No data found.</div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const props = defineProps(['title']);

const period = ref('monthly');

interface Player {
  name: string;
  votes: number;
}

const { data: players, status, error } = await useFetch<Player[]>(appConfig.votingApiUrl, {
  query: { period: period },
  lazy: true,
  server: false,
  watch: [period]
});
</script>
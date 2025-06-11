<template>
  <Container>
    <div :class="{'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8': appConfig.useVotingLeaderboard}">
      <div class="mb-8" :class="{'lg:max-w-2xl mx-auto': !appConfig.useVotingLeaderboard}">
        <div class="bg-gray-950/30 border border-gray-800 rounded-xl p-6 mb-8 max-h-40 custom-scrollbar">
          <div class="overflow-auto max-h-28 pe-4">
            <slot />
          </div>
        </div>

        <div>
          <h2 class="text-gray-200 text-3xl mb-6 text-center">{{ props.voteTitle }}</h2>
        
          <div class="max-w-sm flex mx-auto mb-10">
            <div class="flex-shrink-0 p-3 bg-gray-950/30 rounded-s-md border border-e-0 border-gray-800 shadow-lg">
              <img class="w-10 h-10 rounded" :src="'https://mc-heads.net/avatar/' + nickname" :alt="nickname +  ' avatar'">
            </div>
            <input type="text" id="nickname" v-model="nickname" class="w-full p-3 bg-gray-950/30 placeholder-gray-400 text-gray-200 rounded-e-md border border-gray-800 shadow-lg focus:outline-none focus:ring-0 focus:border-primary-500" placeholder="Enter your nickname here">
          </div>

          <div class="max-w-sm mx-auto grid grid-cols-2 gap-3">
            <a v-for="site in props.votingSites" :href="getUrl(site.url)" target="_blank" class="bg-primary-500 hover:bg-primary-600 transition-colors duration-300 flex items-center space-x-2 justify-center px-5 py-3 focus:outline-none text-white focus:ring-4 font-semibold rounded-full text-sm focus:ring-primary-400">
              <span><font-awesome-icon icon="fa-solid fa-up-right-from-square" /></span>
              <span>{{ site.title }}</span>
            </a>
          </div>
        </div>
      </div>
      
      <VotingLeaderboard :title="props.leaderboardTitle" v-if="appConfig.useVotingLeaderboard" />
    </div>
  </Container>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const nickname = ref('');

const props = defineProps(['votingSites', 'voteTitle', 'leaderboardTitle']);

const getUrl = (url: string) => {
  return url.replace('{nickname}', nickname.value);
};
</script>

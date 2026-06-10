<template>
  <HomeComponent>
    <template v-slot:default>
      <h1 class="text-gray-200 text-4xl mb-5 font-semibold">{{ appConfig.serverName }}</h1>
      <p class="text-gray-400 text-lg mb-5">
        Terra Nova is a 1:500 scale Earth SMP focused around a global progression and economy, structured around player-made geopolitics. Join or create a Town, form or join a Nation, wage or stop Wars, it's fully your decision. No P2W and gambling in the server, followed with a balanced skills, levels and collections systems with talismans, pets and custom items with weekly updates. Whether you're here to build or fight, you've found your place!
      </p>
      
      <PrimaryButton icon="fa-solid fa-gamepad" @click="copyIp">Join now</PrimaryButton>
    </template>

    <template v-slot:right>
      <FeatureGrid>
        <template v-slot:default>
          <FeatureCard title="High Performance" icon="fa-solid fa-gauge-high">Top-notch server performance for smooth gameplay.</FeatureCard>
          <FeatureCard title="Complex yet simple" icon="fa-solid fa-gamepad">Advanced server with plugins enhancing your play time and fun</FeatureCard>
        </template>

        <template v-slot:bottom>
          <FeatureCard title="Growing Community" icon="fa-solid fa-users">Join a vibrant community, make friends, and debate!</FeatureCard>
        </template>
      </FeatureGrid>
    </template>
  </HomeComponent>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
const { copyIp } = useCopyIp();

useHead({
  title: 'Home',
});
</script>

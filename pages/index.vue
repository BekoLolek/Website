<template>
  <HomeComponent>
    <template v-slot:default>
      <h1 class="text-gray-200 text-4xl mb-5 font-semibold">{{ appConfig.serverName }}</h1>
      <p class="text-gray-400 text-lg mb-5">
        Welcome to our website! Join our new and friendly community. Here, you can explore our vast 1:1000 replica of thr world, create a Nation, and go to war with others ones. This server is NOT P2W as seen by our collection system and our balanced ranks.
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
          <FeatureCard title="New Community" icon="fa-solid fa-users">Join a new vibrant community, make friends, and debate!</FeatureCard>
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

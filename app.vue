<template>
  <div class="bg-gray-900 min-h-screen flex flex-col">
    <AppHeader />

    <div class="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full px-6 pt-12">
      <Alerts />
    </div>

    <div class="flex flex-col grow">
      <template v-if="$route.path.startsWith('/wiki')">
        <WikiComponent>
          <NuxtPage />
        </WikiComponent>
      </template>

      <template v-else>
        <main class="flex flex-col grow">
          <NuxtPage />
        </main>
      </template>
    </div>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appConfig.serverName}` : appConfig.serverName;
  },
  meta: [
    { name: 'description', content: appConfig.description }
  ],
})
</script>
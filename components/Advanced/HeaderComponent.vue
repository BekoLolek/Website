<template>
  <header>
    <nav class="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-6 flex items-center justify-between">
      <div class="text-gray-300 font-semibold hidden lg:flex space-x-12">
        <template v-for="link in props.links">
          <NuxtLink v-if="!link.external" :to="link.path" class="flex items-center space-x-2 hover:text-primary-500 duration-300" :class="{'text-primary-500': isActive(link.path)}">
            <font-awesome-icon :icon="link.icon" />
            <span>{{ link.title }}</span>
          </NuxtLink>
          <a v-else :href="link.path" :target="link.blank ? '_blank' : '_self'" class="flex items-center space-x-2 hover:text-primary-500 duration-300">
            <font-awesome-icon :icon="link.icon" />
            <span>{{ link.title }}</span>
          </a>
        </template>
      </div>

      <div class="hidden lg:block">
        <a :href="storeLink" class="px-4 py-3 bg-primary-500 text-white rounded-lg flex items-center space-x-2 hover:bg-primary-600 transition-colors duration-300">
          <font-awesome-icon :icon="props.storeIcon" class="text-lg" />
          <span class="font-semibold">{{ props.storeTitle }}</span>
        </a>
      </div>

      <div class="lg:hidden">
        <button type="button" @click="mobileDrawer?.show()" aria-controls="mobileDrawer" class="text-gray-300 font-semibold flex items-center space-x-2">
          <font-awesome-icon icon="fa-solid fa-bars" />
          <span>Menu</span>
        </button>
      </div>

      <div class="text-gray-300 text-lg space-x-6 lg:hidden">
        <button type="button" @click="copyIp">
          <font-awesome-icon icon="fa-solid fa-gamepad" title="Copy IP" />
        </button>

        <a :href="'https://' + appConfig.discordLink" target="_blank">
          <font-awesome-icon icon="fa-brands fa-discord" title="Discord server" />
        </a>
      </div>
    </nav>

    <div class="relative h-[250px] md:h-[400px]">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(' + appConfig.background + ')' }"></div>
      <div class="absolute inset-0 bg-gray-900" :class="appConfig.backgroundDarkeningOpacityClass"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-50"></div>

      <div class="relative px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-between h-full">
        <div class="w-full max-w-64 xl:max-w-80 flex justify-end">
          <MinecraftCard />
        </div>

        <div class="absolute left-1/2 -translate-x-1/2">
          <img :class="appConfig.logoSizeClasses" :src="appConfig.logo" alt="Server Logo">
        </div>

        <div class="w-full max-w-64 xl:max-w-80 flex">
          <DiscordCard />
        </div>
      </div>
    </div>
  </header>

  <div id="mobileDrawer" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-64 bg-gray-800" tabindex="-1" aria-labelledby="mobileDrawerLabel">
    <h5 id="mobileDrawerLabel" class="text-base font-semibold uppercase text-gray-400">Menu</h5>

    <button type="button" @click="mobileDrawer?.hide()" aria-controls="mobileDrawer" class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>

    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li v-for="link in props.links">
          <NuxtLink v-if="!link.external" :to="link.path" @click="mobileDrawer?.hide()" class="flex items-center p-2 rounded-lg text-gray-200 hover:bg-gray-700 group" :class="{ 'bg-gray-700': isActive(link.path) }">
            <span class="transition duration-75 group-hover:text-gray-200" :class="{ 'text-gray-200': isActive(link.path), 'text-gray-400': !isActive(link.path) }">
              <font-awesome-icon :icon="link.icon" />
            </span>
            <span class="ms-3">{{ link.title }}</span>
          </NuxtLink>
          <a v-else :href="link.path" :target="link.blank ? '_blank' : '_self'" class="flex items-center p-2 rounded-lg text-gray-200 hover:bg-gray-700 group">
            <span class="transition duration-75 group-hover:text-gray-200 text-gray-400">
              <font-awesome-icon :icon="link.icon" />
            </span>
            <span class="ms-3">{{ link.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Drawer } from 'flowbite';

const appConfig = useAppConfig();
const { copyIp } = useCopyIp();

const props = defineProps(['links', 'storeTitle', 'storeLink', 'storeIcon']);

const mobileDrawer = ref<Drawer | null>(null);

const route = useRoute();

const isActive = (path: string) => {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
};

const initMobileDrawer = () => {
  const $targetEl = document.getElementById('mobileDrawer');

  const options = {
    placement: 'left',
    bodyScrolling: true,
  }

  mobileDrawer.value = new Drawer($targetEl, options);
};

onMounted(() => {
  useFlowbite(() => {
    initMobileDrawer();
  });
});
</script>
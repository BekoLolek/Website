<template>
  <div class="sm:px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full flex flex-col grow">
    <div class="flex justify-end px-6 sm:px-0">
      <button type="button" @click="toggleNavigation" class="mb-4 text-slate-400 focus:outline-none focus:ring-0 lg:hidden">Toggle navigation</button>
    </div>

    <div class="flex grow flex-col lg:flex-row">
      <WikiNavigation :navigationOpened="navigationOpened" />

      <div class="flex flex-col grow">
        <WikiSearch />

        <div class="bg-gray-950/30 sm:rounded-t-xl grow px-6 sm:px-8 py-8">
          <div class="max-w-2xl mx-auto">
            <main>
              <CustomMarkdown>
                <slot />
              </CustomMarkdown>
            </main>

            <div class="flex mt-12">
              <NuxtLink v-if="prev" :to="prev._path" class="text-primary-500 hover:underline hover:text-primary-600 font-semibold">
                <font-awesome-icon icon="fa-solid fa-arrow-left" /> {{ prev.title }}
              </NuxtLink>

              <NuxtLink v-if="next" :to="next._path" class="text-primary-500 hover:underline hover:text-primary-600 ms-auto font-semibold">
                {{ next.title }} <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </NuxtLink>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { next, prev } = useContent();

const navigationOpened = ref(false);

const toggleNavigation = () => {
  navigationOpened.value = !navigationOpened.value;
};
</script>
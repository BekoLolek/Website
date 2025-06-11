<template>
  <div class="px-6 sm:px-0 lg:max-w-72 w-full flex-shrink-0 flex-col mb-4 lg:mb-0 lg:me-8 custom-scrollbar" :class="{'hidden lg:flex': !props.navigationOpened, 'flex': navigationOpened}">
    <div class="bg-gray-950/30 grow rounded-xl lg:rounded-b-none p-6 pt-0">
      <div class="sticky top-0 pt-6">
        <div class="overflow-auto max-h-40 lg:max-h-[calc(100vh-3rem)] pr-6">
          <ContentNavigation v-slot="{ navigation }">
            <RecursiveNav @toggleCategory="toggleCategory" :items="(navigation.find((item: NavigationItem) => item._path === '/wiki')?.children || [])" :closed-categories="closedCategories" />
          </ContentNavigation>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NavigationItem {
  _path: string;
  title: string;
  children?: NavigationItem[];
}

const props = defineProps<{ navigationOpened: boolean }>();

const closedCategories = ref<number[]>([]);

const toggleCategory = (index: number) => {
  if (closedCategories.value.includes(index)) {
    closedCategories.value = closedCategories.value.filter((i: number) => i !== index);
  } else {
    closedCategories.value.push(index);
  }
}
</script>

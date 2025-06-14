<template>
  <HeaderComponent :links="links" :storeTitle="storeTitle" :storeLink="storeLink" :storeIcon="storeIcon" />
</template>

<script setup lang="ts">
// Available icons can be found at https://fontawesome.com

const links = [
  {
    title: 'Home',
    path: '/',
    icon: 'fa-solid fa-home',
    external: false,
    blank: false,
  },
  {
    title: 'Rules',
    path: '/rules',
    icon: 'fa-solid fa-scroll',
    external: false,
    blank: false,
  },
  {
    title: 'Wiki',
    path: '/wiki',
    icon: 'fa-solid fa-book',
    external: false,
    blank: false,
  },
  {
    title: 'Staff',
    path: '/staff',
    icon: 'fa-solid fa-user-group',
    external: false,
    blank: false,
  },
  {
    title: 'Vote',
    path: '/vote',
    icon: 'fa-solid fa-check-to-slot',
    external: false,
    blank: false,
  },  
  {
    title: 'Bans',
    path: 'https://bans.terra-nova.world/',
    icon: 'fa-solid fa-ban',
    external: false,
    blank: false,
  },
];

const storeTitle = 'Store';
const storeLink = 'https://store.terra-nova.world/';
const storeIcon = 'fa-solid fa-cart-shopping';
</script>

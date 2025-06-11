<template>
  <FooterComponent :socials="socials" />
</template>

<script lang="ts" setup>
// Available icons can be found at https://fontawesome.com

const socials = [
  {
    title: 'Instagram',
    link: '#',
    icon: 'fa-brands fa-instagram',
  },
  {
    title: 'Youtube',
    link: 'https://www.youtube.com/@Terra-NovaMC',
    icon: 'fa-brands fa-youtube',
  },
  {
    title: 'Tiktok',
    link: '#',
    icon: 'fa-brands fa-tiktok',
  },
  {
    title: 'Discord',
    link: 'https://discord.gg/M5743PSWA4',
    icon: 'fa-brands fa-discord',
  },
];
</script>
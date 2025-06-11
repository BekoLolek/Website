// You can set the navigation links in the file "components/AppHeader.vue"
// The primary color can be set in "tailwind.config.js"

export default defineAppConfig({
  serverName: 'Terra Nova',
  description: '',

  // Depending on your background image, you can fine-tune its darkening.
  // https://tailwindcss.com/docs/opacity

  background: '/img/background.webp',
  backgroundDarkeningOpacityClass: 'opacity-75',

  // Here you can customize the maximum logo size to suit your requirements.
  // https://tailwindcss.com/docs/max-width
  // https://tailwindcss.com/docs/max-height

  logo: '/img/logo.png',
  logoSizeClasses: 'max-h-24 md:max-h-36 max-w-64 md:max-w-80',

  bedrock: false,
  minecraftIp: 'play.Terra-Nova.world',

  // The Discord server must have the widget feature enabled in the settings.

  discordId: '1151265792680267920',
  discordLink: 'discord.gg/M5743PSWA4',

  // If you want to use voting leaderboard, you need to link the template with php api.
  // In case you don't have php hosting, you can use the template without it - simply set the value of useVotingLeaderboard to false.

  useVotingLeaderboard: true,
  votingApiUrl: 'https://terra-nova.world/votes.php'
})

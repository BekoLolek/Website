<template>
  <VotingPage :votingSites="votingSites" :voteTitle="voteTitle" :leaderboardTitle="leaderBoardTitle">
    <h3 class="text-gray-200 text-xl mb-2">Rewards for Voting</h3>

    <p class="text-gray-400 mb-2">For every vote, you will automatically receive a daily key.</p>

    <h4 class="text-gray-200 text-xl mb-2">Monthly Top 3 Rewards:</h4>

    <ul class="list-disc pl-5 text-gray-400">
      <li><strong>1st Place:</strong> 100 bonus points + Exclusive Item</li>
      <li><strong>2nd Place:</strong> 50 bonus points + Unique Cosmetic</li>
      <li><strong>3rd Place:</strong> 25 bonus points + Special Badge</li>
    </ul>
  </VotingPage>
</template>

<script setup lang="ts">
// You can enable or disable the leaderboard in app.config.ts.

const voteTitle = 'Vote';
const leaderBoardTitle = 'Top 5 Voting Players';

// If you use {player} in the url, it will be replaced by the player's nickname in the resulting link.

const votingSites = [
  { title: 'Example site 1', url: 'https://example.com/?player={nickname}' },
  { title: 'Example site 2', url: 'https://example.com/?player={nickname}' },
  { title: 'Example site 3', url: 'https://example.com/?player={nickname}' },
  { title: 'Example site 3', url: 'https://example.com/?player={nickname}' }
];

useHead({
  title: 'Vote',
});
</script>

<template>
  <Container>
    <h1 class="text-gray-200 text-4xl text-center mb-8">Staff</h1>
    
    <!-- I recommend this page for finding colors: https://tailwindcss.com/docs/customizing-colors. I like the colors of shade "600" the most. -->

    <StaffGroup title="Owners">
      <StaffMember name="iq20" rank="Owner" color="#dc2626" />
      <StaffMember name="Wuz_pugs" rank="Owner" color="#dc2626" />
    </StaffGroup>

    <StaffGroup title="Head Management">
      <StaffMember name="BekoLolek" rank="Developer Manager" color="#ca8a04" />
      <StaffMember name="The_Joker_Jr" rank="Community Manager" color="#ca8a04" />
    </StaffGroup>

    <StaffGroup title="Developers">
      <StaffMember name="Beastaro" rank="Developer" color="#2563eb" />
    </StaffGroup>

    <StaffGroup title="Moderators">
      <StaffMember name="Empty" rank="Mod" color="#0675af" />
    </StaffGroup>
  </Container>
</template>

<script setup lang="ts">
useHead({
  title: 'Staff',
});
</script>

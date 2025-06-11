<template>
  <!-- Available icons can be found at https://fontawesome.com -->
  <!-- I recommend this page for finding colors: https://tailwindcss.com/docs/customizing-colors. I like the colors of shade "600" the most. -->
  <!-- If you want to show the alert on all pages, leave the value of pages at :pages="[]" -->

  <AlertsLayout>
    <Alert icon="fa-solid fa-people-group" color="#4f46e5" title="We are looking for new staff members!" :pages="['/staff']">
      You can submit your application <a href="#" class="text-primary-500 underline hover:text-primary-600 font-bold">here</a>.
    </Alert>
  </AlertsLayout>
</template>

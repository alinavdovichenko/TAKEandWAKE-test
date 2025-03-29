<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
</script>

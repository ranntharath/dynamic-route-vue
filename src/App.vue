<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="px-8 md:px-20 lg:px-32">
    <RouterView />
  </main>
</template>

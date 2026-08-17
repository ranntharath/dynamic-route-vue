<script setup lang="ts">
import { provide, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Parent from "./pages/Parent.vue";

const data = ref<string>("Hello from App.vue");
provide("myData", data)

</script>

<template>
  <Navbar />
  <main class="px-8 md:px-20 lg:px-32">
    <RouterView />
    <Parent />
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from '../pinia/counter';

const counter = useCounterStore()

</script>

<template>
  <h1 class="text-2xl font-bold">{{ counter.count }}</h1>
  <button @click="counter.increment" class="bg-red-400">+</button>
</template>
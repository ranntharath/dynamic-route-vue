<script setup lang="ts">
import { useCounterStore } from "../stores/counter";
import { useProductStore } from "../stores/productApi";

const counter = useCounterStore();
const productStore = useProductStore()
</script>

<template>
  <p>{{ productStore.productList }}</p>
  <h1 class="text-2xl font-bold">{{ counter.count }}</h1>
  <button @click="counter.increment" class="bg-red-400">+</button>
</template>

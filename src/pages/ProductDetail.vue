<script setup lang="ts">
import { useRoute } from "vue-router";
import { products } from "../api/product";

const route = useRoute();
const productId = Number(route.params.id);

const product = products.find((pro) => pro.id === productId);
</script>

<template>
  <div v-if="!product">
    <h1 class="text-3xl text-center">Product not found</h1>
  </div>
  <div v-else>
    <h1 class="text-2xl font-bold">Product Detail Page</h1>
    <img :src="product?.image" alt="" />
    <p>{{ product?.name }}</p>
    <p>{{ product?.description }}</p>
    <p>${{ product?.price }}</p>
  </div>
</template>

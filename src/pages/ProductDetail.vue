<script setup lang="ts">
import { useRoute } from "vue-router";
import { products } from "../api/product";

import { onMounted, ref } from "vue";
type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};


const route = useRoute();
const productId = Number(route.params.id);

const product = ref<Product | null>(null);
const isLoading = ref<boolean>(false);

async function getProductById() {
  isLoading.value = true;
  try {
    const res = await fetch(`http://localhost:3000/products/${productId}`);
    const data = await res.json();
    if(data?.error){
      product.value = null;
      return;
    }
    product.value = data;
  } catch (error) {
    console.log(error);
    
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  getProductById();
});
</script>

<template>

  <div v-if="isLoading">
    <h1 class="text-3xl text-center">Loading...</h1>
  </div>

  <div v-else>
    
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
  </div>
</template>

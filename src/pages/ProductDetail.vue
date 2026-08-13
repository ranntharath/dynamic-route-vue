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

async function getProductById() {
  try{
    const res = await fetch(`http://localhost:3000/products/${productId}`);
    const data = await res.json();
    product.value = data;
  }catch(error){
    console.log(error);
  }
}

onMounted(()=>{
  getProductById();
})

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

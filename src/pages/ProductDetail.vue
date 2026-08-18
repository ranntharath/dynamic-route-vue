<script setup lang="ts">
import { useRoute } from "vue-router";

import { onMounted, ref } from "vue";
import { useProductStore } from "../stores/productApi";
import type { Product } from "../types/product";


const route = useRoute();
const productId = Number(route.params.id);


const productStore = useProductStore()

const product = ref<Product | null>(null);

onMounted(async () => {
  product.value = await  productStore.getProductById(productId)
});

</script>

<template>

  <div v-if="productStore.isloading">
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

<script setup lang="ts">
import { products } from '../api/product.ts';
import ProductCard from '../components/ProductCard.vue';
</script>

<template>
  <h1 class="text-2xl font-bold py-10">Product Page</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        <ProductCard v-for="e in products"
            :key="e.id"
            :id="e.id"
            :name="e.name"
            :price="e.price"
            :description="e.description"
            :image="e.image"
         />  

    </div>

</template>
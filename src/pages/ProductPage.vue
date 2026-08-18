<script setup lang="ts">
import { onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { useCounterStore } from "../stores/counter.ts";
import { useProductStore } from "../stores/productApi.ts";

const { count } = useCounterStore();

const productStore = useProductStore()
onMounted(() => {
  productStore.getAllProducts()
});


</script>

<template>
  <h1 class="text-2xl font-bold py-10">Product Page {{ count }}</h1>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center"
  >
    <ProductCard
      v-for="e in productStore.productList"
      :key="e.id"
      :id="e.id"
      :name="e.name"
      :price="e.price"
      :description="e.description"
      :image="e.image"
    />
  </div>
</template>

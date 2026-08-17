<script setup lang="ts">
import { onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { ref } from "vue";
import { useCounterStore } from "../pinia/counter.ts";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const productRef = ref<Product[]>([]);

async function getAllProducts() {
  try{
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    productRef.value = data;
  }catch(error){
    console.log(error);
  }
}

onMounted(()=>{
  getAllProducts();
})
//
const {count} = useCounterStore()

</script>

<template>
  <h1 class="text-2xl font-bold py-10">Product Page {{ count }}</h1>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center"
  >
    <ProductCard
      v-for="e in productRef"
      :key="e.id"
      :id="e.id"
      :name="e.name"
      :price="e.price"
      :description="e.description"
      :image="e.image"
    />
  </div>
</template>

<script setup lang="ts">

</script>

<template>

    <nav class="bg-white border-b">
  <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

    <!-- Logo -->
    <h1 class="text-xl font-bold text-blue-600">
      MyApp
    </h1>

    <!-- Menu -->
    <div class="flex gap-6">
      
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/about">About</RouterLink>

    </div>

  </div>
</nav>


</template>
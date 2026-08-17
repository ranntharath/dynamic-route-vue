<script setup lang='ts'>
import { inject } from 'vue';

const myData = inject("myData")
</script>
<template>
    <h1>data get form app : {{ myData }}</h1>
</template>
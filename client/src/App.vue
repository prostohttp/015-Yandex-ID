<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <TheHeader/>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
  .container {
    font-family: 'Roboto', sans-serif;
    max-width: 1200px;
    margin: 40px auto;
    padding: 30px 40px;
    background-color: #fafafa;
    border-radius: 7px;
    text-align: center;
  }
</style>
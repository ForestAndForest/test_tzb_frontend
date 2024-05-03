<script lang="ts" setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <RouterView style="min-height: calc(100vh - 278px)" />
  <Footer />
</template>

<style scoped></style>

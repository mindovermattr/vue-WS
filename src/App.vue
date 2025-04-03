<script setup>
import { RouterView } from "vue-router";
import VHeader from "./components/VHeader.vue";
import ThemeContext from "./Context/themeContext.vue";
</script>

<template>
  <ThemeContext>
    <RouterView />
  </ThemeContext>
</template>

<style scoped></style>

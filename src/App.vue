<script setup>
import { RouterView } from "vue-router";
import ThemeContext from "./Context/themeContext.vue";
</script>

<template>
  <ThemeContext>
    <RouterView />
  </ThemeContext>
</template>

<style scoped></style>

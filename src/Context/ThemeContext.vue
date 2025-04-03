<template>
  <slot></slot>
</template>

<script setup>
import { provide, ref } from "vue";

const theme = ref(localStorage.getItem("theme") || "light");

const setTheme = (themeValue) => {
  if (themeValue === "light" || themeValue === "dark") theme.value = themeValue;
  localStorage.setItem("theme", theme.value);
};

const toggleTheme = () => {
  if (theme.value === "light") theme.value = "dark";
  else theme.value = "light";
  localStorage.setItem("theme", theme.value);
};

provide("theme", {
  theme,
  setTheme,
  toggleTheme,
});
</script>

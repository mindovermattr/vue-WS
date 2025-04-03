<template>
  <VHeader />

  <main class="main">
    <section class="container">
      <h1 class="title">Избранные книги</h1>
      <VBookList @addBook="addBook" :books="favoriteBooks" />
    </section>
  </main>
</template>

<script setup>
import { addBook as addBookApi, getFavoriteBooks } from "@/api/books.api";
import VBookList from "@/components/VBookList.vue";
import VHeader from "@/components/VHeader.vue";
import { inject, onMounted, ref, toRef, watchEffect } from "vue";

const favoriteBooks = ref([]);
const themeContext = toRef(inject("theme"));

const addBook = (event, formData) => {
  addBookApi({ ...formData });
  favoriteBooks.value.push({ ...formData });
};

watchEffect(() => {
  document.documentElement.setAttribute("data-theme", themeContext.value.theme);
});

onMounted(async () => {
  favoriteBooks.value = await getFavoriteBooks(9);
});
</script>

<style scoped>
.main {
  color: var(--text-color);
  background-color: var(--bg-color);
}
.title {
  padding-top: 24px;
  font-size: 32px;
}
</style>

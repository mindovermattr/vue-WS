<template>
  <main class="container">
    <h1 class="title">Избранные книги</h1>
    <VBookList @addBook="addBook" :books="favoriteBooks" />
  </main>
</template>

<script setup>
import { addBook as addBookApi, getFavoriteBooks } from "@/api/books.api";
import VBookList from "@/components/VBookList.vue";
import { onMounted, ref } from "vue";

const favoriteBooks = ref([]);

const addBook = (event, formData) => {
  addBookApi({ ...formData });
  favoriteBooks.value.push({ ...formData });
};

onMounted(async () => {
  favoriteBooks.value = await getFavoriteBooks(9);
});
</script>

<style scoped>
.title {
  margin-top: 24px;
}
</style>

<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">BookReads</h1>
    </div>
  </header>
  <main class="container main">
    <section class="products">
      <h2 class="products__title">Наши книги</h2>
      <VBookList :books="books" />
    </section>
    <VBookForm @addBook="addBook" />
  </main>
</template>

<script setup>
import { getBooks } from "@/api/books.api";
import VBookForm from "@/components/VBookForm.vue";
import VBookList from "@/components/VBookList.vue";
import { onMounted, ref } from "vue";

const books = ref([]);

onMounted(() => {
  getBooks().then((data) => {
    books.value = data;
  });
});

const addBook = (event, formData) => {
  console.log(formData);
  books.value.push({ ...formData });
};
</script>

<style scoped>
.header {
  background-color: forestgreen;
  padding: 10px 0;
  color: white;
}
.main {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}
.products {
  margin-top: 36px;
}
.products__title {
  font-size: 36px;
}
</style>

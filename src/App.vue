<script setup>
import { onMounted, ref } from "vue";
import { getBooks } from "./api/books.api";
import "./assets/main.css";
import VBookForm from "./components/VBookForm.vue";
import VBookList from "./components/VBookList.vue";

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

<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">BookReads</h1>
    </div>
  </header>
  <main class="container">
    <section class="products">
      <h2 class="products__title">Наши книги</h2>
      <VBookList :books="books" />
    </section>
    <VBookForm @addBook="addBook" />
  </main>
</template>

<style scoped>
.header {
  background-color: forestgreen;
  padding: 10px 0;
  color: white;
}
.products {
  margin-top: 36px;
}
.products__title {
  font-size: 36px;
}


</style>

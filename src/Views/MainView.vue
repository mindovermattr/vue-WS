<template>
  <main class="container main">
    <section class="products">
      <h2 class="products__title">Наши книги</h2>

      <VBookList @addBook="addBook" :books="books" />
    </section>
  </main>
</template>

<script setup>
import { addBook as addBookApi, getBooks } from "@/api/books.api";
import VBookList from "@/components/VBookList.vue";
import { onMounted, ref } from "vue";

const books = ref([]);

onMounted(async () => {
  const resp = await getBooks();
  books.value = resp;
});

const addBook = (event, formData) => {
  addBookApi({ ...formData, rate: +formData.rate });
};
</script>

<style scoped>
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

.products__button {
  background-color: forestgreen;
  padding: 8px 12px;
  color: white;
  cursor: pointer;
}
.products__controls {
  margin-top: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
}
.products__page {
  font-size: 32px;
}
</style>

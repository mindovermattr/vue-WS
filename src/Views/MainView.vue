<template>
  <main class="container main">
    <section class="products">
      <h2 class="products__title">Наши книги</h2>
      <div class="products__controls">
        <button @click="prevPage" class="products__button">Пред</button>
        <p class="products__page">{{ currentPage }}</p>
        <button @click="nextPage" class="products__button">След</button>
      </div>

      <VBookList @addBook="addBook" :books="books" />
    </section>
  </main>
</template>

<script setup>
import { addBook as addBookApi, getBooks } from "@/api/books.api";
import VBookList from "@/components/VBookList.vue";
import { onMounted, ref, watchEffect } from "vue";

const books = ref([]);
const currentPage = ref(1);

onMounted(async () => {
  const resp = await getBooks(currentPage.value, 9);
  books.value = resp.data;
});
watchEffect(async () => {
  const resp = await getBooks(currentPage.value, 9);
  books.value = resp.data;
});

const addBook = (event, formData) => {
  console.log(formData);
  addBookApi({ ...formData });
};

const prevPage = () => {
  if (currentPage.value === 1) return;
  currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value === 6) return;
  currentPage.value++;
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

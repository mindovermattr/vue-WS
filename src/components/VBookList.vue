<script setup>
import VBookCard from "./VBookCard.vue";
import VBookForm from "./VBookForm.vue";

defineProps({
  books: Array,
});

defineEmits(["addBook"]);
</script>
<template>
  <div class="wrapper">
    <div class="list">
      <VBookCard v-for="book in books" v-bind="book" v-bind:key="book.id" />
    </div>
    <VBookForm @addBook="(event, payload) => $emit('addBook', event, payload)" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  margin-top: 24px;
  align-items: flex-start;
}
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: flex-start;
}
</style>

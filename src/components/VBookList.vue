<script setup>
import VBookCard from "./VBookCard.vue";

defineProps({
  books: Array,
});
</script>
<template>
  <div class="list">
    <VBookCard v-for="book in books" v-bind="book" v-bind:key="book.id" />
  </div>
</template>

<style scoped>
.list {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
}
</style>

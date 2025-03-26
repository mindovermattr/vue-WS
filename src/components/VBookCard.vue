<template>
  <article class="list__item item">
    <div class="item__image"></div>
    <h3 class="item__title">{{ title }}</h3>
    <p class="item__author">{{ author }}</p>
    <p class="item__rating">{{ rate }}</p>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.list__item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid black;
  border-radius: 12px;
  padding: 28px;
}
.item__image {
  width: 200px;
  height: 200px;
  background-color: #3ca4aa;
}
</style>

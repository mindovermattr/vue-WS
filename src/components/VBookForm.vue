<template>
  <form @submit.prevent="handleSumbit($event)" class="form" action="#">
    <fieldset class="form__fields">
      <legend>Введите данные книги</legend>
      <input v-model="formData.title" placeholder="Имя книги" type="text" />
      <input v-model="formData.author" placeholder="Автор книги" type="text" />
      <input v-model="formData.rate" placeholder="Рейтинг книги" type="text" />
    </fieldset>
    <button>Добавить</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  title: "",
  author: "",
  rate: "",
});

const emit = defineEmits(["addBook"]);

const handleSumbit = (event) => {
  emit("addBook", event, formData);
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 12px;
}
.form__fields {
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  flex-direction: column;
}
</style>

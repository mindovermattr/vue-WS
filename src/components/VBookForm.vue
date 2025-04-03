<template>
  <form @submit.prevent="handleSumbit($event)" class="form" action="#">
    <fieldset class="form__fields">
      <legend>Введите данные книги</legend>
      <input class="form__field" v-model="formData.title" placeholder="Имя книги" type="text" />
      <input class="form__field" v-model="formData.author" placeholder="Автор книги" type="text" />
      <input class="form__field" v-model="formData.rate" placeholder="Рейтинг книги" type="text" />
    </fieldset>
    <button class="form__button">Добавить</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  title: "",
  author: "",
  rate: 0,
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
  justify-content: flex-start;

  padding: 24px 12px;
  gap: 12px;
  border: 1px solid gray;
  background-color: var(--bg-color);
}
.form__fields {
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  flex-direction: column;
}
.form__field {
  padding: 6px 12px;
  border-radius: 12px;
}
.form__button {
  background-color: var(--header-color);
  padding: 8px 12px;
  color: white;
  cursor: pointer;
}
</style>

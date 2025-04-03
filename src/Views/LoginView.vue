<template>
  <main class="main">
    <form class="form">
      <label>Username</label>
      <input v-model="formData.userName" type="text" />
      <label>Password</label>
      <input v-model="formData.password" type="password" />
      <button class="form__button" @click="login" type="button">Login</button>
      <p v-if="error" class="form__error">{{ error }}</p>
    </form>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const formData = reactive({
  userName: "",
  password: "",
});

const error = ref("");

const router = useRouter();

const login = () => {
  if (formData.password === "1234" && formData.userName === "admin") {
    localStorage.setItem("auth", true);
    router.push("/");
  }
  error.value = "Error";
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.form {
  border: 1px solid var(--text-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.form__button {
  color: var(--text-color);
  border: 1px solid var(--text-color);
  padding: 8px 12px;
}
</style>

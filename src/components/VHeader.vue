<template>
  <header class="header">
    <div class="container header__container">
      <RouterLink class="header__title" to="/">
        <h1>BooksRead</h1>
      </RouterLink>
      <button class="header__button" @click="themeContext.toggleTheme()">theme</button>
      <nav class="header__navigation">
        <RouterLink to="/favorites" class="header__link">Favorites</RouterLink>
        <button @click="logout" class="header__link">Exit</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

const themeContext = inject("theme");

const router = useRouter();

const logout = () => {
  localStorage.removeItem("auth");
  router.push("/login");
};
</script>

<style scoped>
.header {
  background-color: var(--header-color);
  padding: 12px 0;
  color: var(--text-header-color);
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__link {
  font-size: 24px;
  color: var(--text-header-color);
}
.header__navigation {
  display: flex;
  gap: 12px;
}
.header__button {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--bg-color);
  color: var(--text-color);
}

.header__title {
  color: inherit;
  text-decoration: none;
}
</style>

<template>
  <header class="header">
    <div class="container header__container">
      <h1 class="header__title">BookReads</h1>
      <nav class="header__navigation">
        <RouterLink to="/" class="header__link">Main</RouterLink>
        <RouterLink to="/favorites" class="header__link">Favorites</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  background-color: forestgreen;
  padding: 10px 0;
  color: white;
}
.header__container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.header__link {
  font-size: 24px;
  color: white;
}
.header__navigation {
  display: flex;
  gap: 12px;
}
</style>

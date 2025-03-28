<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
      <h1>Добро пожаловать в Take and Wake</h1>
      <nav>
        <NuxtLink to="/">Идентификация</NuxtLink>
        <NuxtLink to="/account">Аккаунт</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2025 Take and Wake. Все права защищены.</p>
    </footer>
  </div>
</template>

<script setup>
// Здесь можно добавить логику или импортировать необходимые компоненты, если это необходимо
</script>

<template>
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>
      <div>
        <label for="username"></label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Имя пользователя"
          required
        />
      </div>
      <div>
        <label for="password"></label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Пароль"
          required
        />
      </div>
      <button type="submit">Войти</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '~/store/auth'; // Импорт состояния аутентификации
  
  const username = ref('');
  const password = ref('');
  const error = ref('');
  const authStore = useAuthStore();
  
  const handleLogin = () => {
    error.value = ''; // Сброс ошибки перед новой аутентификацией
    if (authStore.login(username.value, password.value)) {
      window.location.href = '/account'; // Редирект на страницу аккаунта
    } else {
      error.value = 'Неверные учетные данные. Попробуйте еще раз.';
    }
  };
  </script>
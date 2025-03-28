<template>
  <div class="account-container">
    <h1>Страница аккаунта</h1>
    <button @click="logout" class="logout-button">Выход</button>
    <h2>Товары</h2>
    <DataTable :items="products" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchProducts } from '~/api/fetch-requests'; // Импортируем функцию из вашего api
import DataTable from '~/components/DataTable.vue'; // Импортируйте компонент таблицы

const products = ref([]);

const loadProducts = async () => {
  try {
    products.value = await fetchProducts(); // Загружаем данные о товарах
  } catch (error) {
    console.error('Ошибка при загрузке продуктов:', error);
  }
};

const logout = () => {
  localStorage.removeItem('loggedIn'); // Удалите данные сессии
  window.location.href = '/'; // Редирект на страницу логина
};

onMounted(loadProducts); // Загружаем данные при монтировании компонента
</script>

<style scoped>
.account-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logout-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
}
.logout-button:hover {
  background-color: #c0392b;
}
</style>
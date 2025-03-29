<template>
  <div class="account-page">
    <h2>Товары</h2>
    <DataTable :items="products" />
    <button @click="logout" class="logout-button">Выход</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { fetchProducts } from "~/api/fetch-requests";
import DataTable from "~/components/DataTable.vue";
import type { Product } from "~/types/product";

const products = ref<Product[]>([]);
const router = useRouter();

const loadProducts = async () => {
  try {
    products.value = await fetchProducts();
    console.log("Продукты:", products.value);
  } catch (error) {
    console.error("Ошибка загрузки продуктов:", error);
  }
};

const logout = () => {
  localStorage.removeItem("loggedIn"); // Удаляем данные сессии
  router.push("/"); // Перенаправление на страницу логина
};

onMounted(loadProducts);
</script>
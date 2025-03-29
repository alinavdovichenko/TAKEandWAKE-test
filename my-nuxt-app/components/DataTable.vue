<template>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Категория</th>
          <th>Цена (₽)</th>
          <th>Статус</th>
          <th>Дата создания</th>
          <th>Ингредиенты</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in items" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price.toFixed(2) }}</td>
          <td :class="{ available: product.status === Status.Available, unavailable: product.status === Status.OutOfStock }">
            {{ product.status }}
          </td>
          <td>{{ formatDate(product.date_created) }}</td>
          <td>{{ product.ingredients.join(", ") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";
import { Status } from "~/types/product";

const props = defineProps<{
  items: Product[];
}>();

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("ru-RU");
};
</script>
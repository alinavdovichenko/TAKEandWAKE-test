import type { Product } from '../types/product';

// Функция для загрузки товаров из JSON-файла
export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Сетевая ошибка');
      }
      return await response.json() as Product[];
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      throw error;
    }
  };
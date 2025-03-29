import type { Product } from "~/types/product";

export const filterProducts = (
  items: Product[],
  searchQuery: string,
  selectedStatus: string
): Product[] => {
  return items.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus ? product.status === selectedStatus : true;

    return matchesSearch && matchesStatus;
  });
};
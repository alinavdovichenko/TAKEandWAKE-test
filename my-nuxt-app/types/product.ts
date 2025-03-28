export type Product = {
    id: number;
    name: string;
    status: 'available' | 'unavailable';
    date_created: string;
    price: number;
  };
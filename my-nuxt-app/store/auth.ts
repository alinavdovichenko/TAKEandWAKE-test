import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    login(username: any, password: any) {
      // Простой пример проверки (замените на реальную логику)
      if (username === 'user' && password === 'pass') {
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoggedIn = true;
        return true;
      }
      return false;
    },
    logout() {
      localStorage.removeItem('isLoggedIn');
      this.isLoggedIn = false;
    },
  },
});
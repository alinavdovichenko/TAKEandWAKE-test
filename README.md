### Nuxt 3

## 1. Описание проекта

Данное веб-приложение реализовано на Nuxt 3 с использованием TypeScript и Sass. Оно включает две страницы:

Страница идентификации (логин/пароль)

Страница аккаунта (с данными пользователя и возможностью выхода из системы)

После успешной аутентификации пользователь переходит на страницу аккаунта, где отображается таблица с данными и возможность фильтрации. Данные пользователей хранятся в JSON-объекте "users.json".

## 2. Технологический стек

Nuxt 3 (Vue 3 + SSR)

Pinia (для управления состоянием)

TypeScript (строгая типизация)

Sass (SCSS) (для стилизации)

Express.js (в качестве backend-сервера)

localStorage (для хранения сессии пользователя)

## 3. Установка и запуск проекта

3.1 Запуск проекта в режиме разработки "npm run dev"

3.2 Сборка и запуск на продакшене "npm run build / npm run start"

## 4. Структура проекта

my-nuxt-app/ 
│── mock/
│   ├── data.json
│   ├── user.json 
│── api/
│   ├── fetch-requests.ts
│── styles/
│   ├── _variables.scss     
│   ├── _mixins.scss        
│   ├── _header.scss          
│   ├── _login-page.scss      
│   ├── _login-form.scss 
│   ├── _data-table.scss     
│   ├── main.scss 
│── assets/  
│   ├── fonts/  
│   │   ├── AntonRegular/  
│   │   │   ├── AntonRegular.eot  
│   │   │   ├── AntonRegular.woff  
│   │   │   └── AntonRegular.ttf  
│── pages/  
│   ├── index.vue (Страница логина)
│   ├── account.vue (Страница аккаунта)
│── store/
│   ├── auth.ts (Авторизация)
│   ├── data.ts (Данные таблицы)
│── components/
│   ├── LoginForm.vue
│   ├── DataTable.vue
│   ├── FilterPanel.vue
│── middleware/
│   ├── auth.ts (Проверка сессии)
│── server/
│   ├── index.ts (Express API)           
│── types/
│   ├── product.ts
│── api/
│   ├── fetch-requests.ts
│── public/
│   ├── favicon.png
│── nuxt.config.ts

## 5. Описание основных функций

📌 Авторизация (store/auth.ts)

• Логин проверяется по локальному JSON-объекту

• Данные сохраняются в localStorage для сохранения сессии

• После успешного входа — редирект на /account

📌 Таблица с данными (store/data.ts)

• Загружается JSON с обязательными полями:

• Фильтрация по дате и мульти-выбор по атрибуту

📌 Выход из системы

• При нажатии «Выход» очищается localStorage, выполняется редирект на страницу логина
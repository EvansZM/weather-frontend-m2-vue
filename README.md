# Aurora · Tu clima en Chile 🌦️

Aplicación frontend desarrollada con Vue 3, Vue Router, Vuex, Bootstrap y SCSS, como parte del proceso de refactor del proyecto original.

Aurora permite visualizar información climática de distintas ciudades de Chile, incluyendo temperatura actual, estado del clima y pronóstico semanal en tiempo real utilizando la API de OpenWeather. Además, incorpora autenticación básica, manejo de estado global y personalización por usuario mediante favoritos.

---

## 🛠️ Tecnologías utilizadas

* Vue 3 (Vite)
* Vue Router
* Vuex
* JavaScript (ES6+)
* SCSS (SASS)
* Bootstrap 5
* API OpenWeatherMap
* Git / GitHub

---

## 🧠 Arquitectura del proyecto

El proyecto evolucionó desde una aplicación estática en JavaScript a una SPA (Single Page Application) utilizando Vue.

### 📁 Estructura principal

* `views/`

  * `HomeView.vue` → listado de ciudades y búsqueda
  * `DetalleView.vue` → detalle climático por ciudad
  * `AcercaView.vue` → información del proyecto
  * `LoginView.vue` → inicio de sesión
  * `FavoritosView.vue` → vista protegida de favoritos

* `store/`

  * `index.js` → estado global con Vuex (usuario, autenticación, favoritos)

* `services/`

  * `apiClient.js` → consumo de API

* `data/`

  * `lugares.js` → fuente base de ciudades

* `router/`

  * `index.js` → navegación y protección de rutas

---

## 🔄 Funcionalidades principales

* 📍 Listado dinámico de ciudades
* 🌡️ Clima en tiempo real (API)
* 🔍 Búsqueda reactiva con `v-model`
* 📊 Datos detallados por ciudad
* 📅 Pronóstico semanal
* ⚠️ Manejo de errores
* 🔗 Navegación con Vue Router
* 📱 Diseño responsive
* 🔐 Inicio de sesión (usuario simulado)
* 🧠 Estado global con Vuex
* ❤️ Sistema de favoritos por usuario
* 🔒 Rutas protegidas

---

## 🔐 Sistema de usuarios

La aplicación incluye un sistema de autenticación básico con usuarios simulados en el frontend.

### 👤 Datos del usuario

Cada usuario contiene:

* nombre
* email
* contraseña
* favoritos
* preferencias básicas

### 🔄 Flujo de autenticación

* El usuario inicia sesión en `/login`
* Vuex guarda el usuario en el estado global
* El navbar cambia dinámicamente mostrando el nombre
* Se habilita la vista `/favoritos`
* Al cerrar sesión, se limpia el estado y se redirige

### 🔑 Credenciales de prueba

Correo: [test@test.com](mailto:test@test.com)
Contraseña: 1234

---

## ❤️ Favoritos y personalización

Una vez autenticado, el usuario puede:

* Agregar ciudades a favoritos ❤️
* Quitar ciudades de favoritos 🤍
* Ver sus ciudades en la vista `/favoritos`

Los favoritos:

* Se almacenan en Vuex
* Cambian según el usuario
* Permiten personalizar la experiencia

---

## 🛣️ Rutas principales

* `/` → Home
* `/lugar/:slug` → detalle de ciudad
* `/acerca` → información
* `/login` → inicio de sesión
* `/favoritos` → vista protegida

---

## 🔒 Protección de rutas

La ruta `/favoritos` requiere autenticación.

Si un usuario no autenticado intenta acceder:
→ es redirigido automáticamente a `/login`

---

## 🔐 Variables de entorno

Crear archivo `.env` en la raíz:

VITE_OPENWEATHER_API_KEY=TU_API_KEY

⚠️ Este archivo no se sube a GitHub (incluido en `.gitignore`)

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar repositorio:

git clone https://github.com/EvansZM/weather-frontend-m2-vue.git

2. Entrar al proyecto:

cd weather-frontend-m2-vue

3. Instalar dependencias:

npm install

4. Ejecutar:

npm run dev

---

## 📸 Evidencias

En la carpeta `evidencias/`:

* Login funcionando
* Navbar dinámica (usuario logueado)
* Home con favoritos (toggle corazón)
* Vista de favoritos
* Ruta protegida funcionando
* Vista detalle con clima

---

## 🔄 Refactor realizado

* Migración de JavaScript a Vue 3
* Implementación de SPA
* Uso de Vue Router
* Uso de Vuex para estado global
* Implementación de login
* Sistema de favoritos por usuario
* Protección de rutas
* Consumo de API OpenWeather
* Variables de entorno
* Mejora de UI/UX

---

## 🚧 Estado del proyecto

Proyecto finalizado a nivel académico.

Incluye:

* SPA funcional
* API integrada
* Login y rutas protegidas
* Estado global
* Personalización por usuario
* Código modular

---

## 💡 Mejoras futuras

* Persistencia con localStorage
* Registro de usuarios
* Modo oscuro 🌙
* Geolocalización
* Loader de carga
* Backend real para autenticación

---

## 🔗 Repositorio

GitHub:
https://github.com/EvansZM/weather-frontend-m2-vue

# Aurora · Tu clima en Chile 🌦️

Aplicación frontend desarrollada con Vue 3, Bootstrap y SCSS, como parte del proceso de refactor del proyecto original (M2 → M6).

Aurora permite visualizar información climática de distintas ciudades de Chile, incluyendo temperatura actual, estado del clima y pronóstico semanal en tiempo real utilizando la API de OpenWeather.

---

## 🛠️ Tecnologías utilizadas

* Vue 3 (Vite)
* Vue Router
* JavaScript (ES6+)
* SCSS (SASS)
* Bootstrap 5
* API OpenWeatherMap
* Git / GitHub

---

## 🧠 Arquitectura del proyecto

El proyecto evolucionó desde una aplicación estática en JavaScript a una SPA (Single Page Application) utilizando Vue.

### 🔹 Estructura basada en componentes:

* `views/`

  * HomeView → listado de ciudades
  * DetalleView → clima detallado
  * AcercaView → información del proyecto

* `services/`

  * apiClient.js → consumo de API

* `data/`

  * lugares.js → fuente base de ciudades

* `router/`

  * navegación dinámica entre vistas

---

## 🔄 Funcionalidades principales

* 📍 Listado dinámico de ciudades
* 🌡️ Clima en tiempo real (API)
* 🔍 Búsqueda reactiva con v-model
* 📊 Datos detallados por ciudad
* 📅 Pronóstico semanal
* ⚠️ Manejo de errores
* 🔗 Navegación con Vue Router
* 📱 Diseño responsive

---

## 🔐 Uso de variables de entorno

Este proyecto usa variables de entorno mediante Vite.

### Crear archivo `.env`

```env
VITE_OPENWEATHER_API_KEY=TU_API_KEY
```

⚠️ Este archivo NO se sube a GitHub (está en .gitignore)

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/EvansZM/weather-frontend-m2-vue.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar proyecto:

```bash
npm run dev
```

---

## 📸 Evidencias

En la carpeta `evidencias/` se incluyen:

* Home con datos dinámicos
* Búsqueda funcionando
* Vista detalle
* Manejo de errores
* Responsive

---

## 🔄 Refactor realizado

* Migración completa de JS a Vue 3
* Implementación de SPA
* Uso de Vue Router
* Separación en componentes y servicios
* Uso de API real (OpenWeather)
* Implementación de variables de entorno
* Mejora de UI/UX

---

## 🚧 Estado del proyecto

Proyecto finalizado a nivel académico.

Incluye:

* SPA funcional
* Consumo de API
* Navegación dinámica
* Código modular y escalable

---

## 💡 Mejoras futuras

* Animaciones UI
* Loader de carga
* Modo oscuro 🌙
* Geolocalización
* Backend para ocultar API Key

---

## 🔗 Repositorio

GitHub:
https://github.com/EvansZM/weather-frontend-m2-vue

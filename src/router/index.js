// Importa la función necesaria para crear el router
import { createRouter, createWebHistory } from 'vue-router'

// Importa las vistas principales de la aplicación
import HomeView from '../views/HomeView.vue'
import DetalleView from '../views/DetalleView.vue'

// Define las rutas de la SPA
const routes = [
  {
    // Ruta principal
    path: '/',
    // Nombre interno de la ruta
    name: 'home',
    // Componente que se mostrará en esta ruta
    component: HomeView
  },
  {
    // Ruta dinámica para el detalle de cada lugar
    path: '/lugar/:slug',
    // Nombre interno de la ruta
    name: 'detalle',
    // Componente asociado a la vista de detalle
    component: DetalleView,
    // Permite pasar los parámetros de la URL como props
    props: true
  }
]

// Crea la instancia del router usando historial HTML5
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Exporta el router para usarlo en main.js
export default router
// Importa las funciones necesarias para crear el router
import { createRouter, createWebHistory } from 'vue-router'

// Importa el store para revisar si el usuario está autenticado
import store from '../store'

// Importa las vistas principales de la aplicación
import HomeView from '../views/HomeView.vue'
import DetalleView from '../views/DetalleView.vue'
import AcercaView from '../views/AcercaView.vue'
import LoginView from '../views/LoginView.vue'
import FavoritosView from '../views/FavoritosView.vue'

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
  },
  {
    // Ruta de la vista "Acerca de"
    path: '/acerca',
    // Nombre interno de la ruta
    name: 'acerca',
    // Componente asociado
    component: AcercaView
  },
  {
    // Ruta de inicio de sesión
    path: '/login',
    // Nombre interno de la ruta
    name: 'login',
    // Componente asociado
    component: LoginView
  },
  {
    // Ruta protegida para ver los lugares favoritos del usuario
    path: '/favoritos',
    // Nombre interno de la ruta
    name: 'favoritos',
    // Componente asociado
    component: FavoritosView,
    // Meta propiedad para indicar que requiere autenticación
    meta: { requiresAuth: true }
  }
]

// Crea la instancia del router usando historial HTML5
const router = createRouter({
  // Usa URLs limpias sin hash
  history: createWebHistory(),
  // Registra las rutas definidas arriba
  routes
})

// Guard global de navegación
router.beforeEach((to, from, next) => {
  // Si la ruta requiere autenticación y el usuario no ha iniciado sesión
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // Redirige al login
    next('/login')
  } else {
    // Si no requiere autenticación o el usuario ya está autenticado, deja pasar
    next()
  }
})

// Exporta el router para usarlo en main.js
export default router
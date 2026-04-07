// Importamos createStore desde Vuex para crear el estado global de la aplicación
import { createStore } from 'vuex'

// Simulación de usuarios para el login
const usuarios = [
  {
    email: 'test@test.com',
    password: '1234',
    nombre: 'admin',
    favoritos: ['Santiago', 'Valparaíso'],
    preferencias: {
      unidad: 'C'
    }
  }
]

// Exportamos el store principal
export default createStore({
  // Estado global
  state: {
    usuario: null,
    isAuthenticated: false
  },

  // Mutations: son las únicas que cambian el state
  mutations: {
    // Guarda el usuario autenticado
    SET_USUARIO(state, usuario) {
      state.usuario = usuario
      state.isAuthenticated = true
    },

    // Limpia la sesión
    LOGOUT(state) {
      state.usuario = null
      state.isAuthenticated = false
    },

    // Actualiza preferencias del usuario
    ACTUALIZAR_PREFERENCIAS(state, preferencias) {
      if (state.usuario) {
        state.usuario.preferencias = preferencias
      }
    },

    // Agrega un lugar a favoritos si todavía no existe
    AGREGAR_FAVORITO(state, lugar) {
      // Si no hay usuario logueado, no hacemos nada
      if (!state.usuario) return

      // Si la ciudad no está ya en favoritos, la agregamos
      if (!state.usuario.favoritos.includes(lugar)) {
        state.usuario.favoritos.push(lugar)
      }
    },

    // Quita un lugar de favoritos
    QUITAR_FAVORITO(state, lugar) {
      // Si no hay usuario logueado, no hacemos nada
      if (!state.usuario) return

      // Filtramos el arreglo dejando todo menos el lugar a eliminar
      state.usuario.favoritos = state.usuario.favoritos.filter(
        favorito => favorito !== lugar
      )
    }
  },

  // Actions: manejan lógica y luego llaman mutations
  actions: {
    // Acción para iniciar sesión
    login({ commit }, { email, password }) {
      // Buscamos si existe un usuario con ese email y contraseña
      const usuario = usuarios.find(
        u => u.email === email && u.password === password
      )

      // Si existe, lo guardamos en Vuex y devolvemos true
      if (usuario) {
        commit('SET_USUARIO', usuario)
        return true
      }

      // Si no existe, devolvemos false
      return false
    },

    // Acción para cerrar sesión
    logout({ commit }) {
      commit('LOGOUT')
    },

    // Acción para agregar un favorito
    agregarFavorito({ commit }, lugar) {
      commit('AGREGAR_FAVORITO', lugar)
    },

    // Acción para quitar un favorito
    quitarFavorito({ commit }, lugar) {
      commit('QUITAR_FAVORITO', lugar)
    },

    // Acción toggle: si existe lo quita, si no existe lo agrega
    toggleFavorito({ state, commit }, lugar) {
      // Si no hay usuario, no hacemos nada
      if (!state.usuario) return

      // Revisamos si ya estaba en favoritos
      const yaEsFavorito = state.usuario.favoritos.includes(lugar)

      // Si ya existe, lo quitamos
      if (yaEsFavorito) {
        commit('QUITAR_FAVORITO', lugar)
      } else {
        // Si no existe, lo agregamos
        commit('AGREGAR_FAVORITO', lugar)
      }
    }
  },

  // Getters: accesos rápidos al estado
  getters: {
    // Devuelve el usuario actual
    usuario: state => state.usuario,

    // Devuelve si hay sesión activa
    isAuthenticated: state => state.isAuthenticated,

    // Devuelve favoritos o un arreglo vacío
    favoritos: state => state.usuario?.favoritos || []
  }
})
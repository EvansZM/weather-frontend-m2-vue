<template>
  <div class="app-shell">
    <!-- HEADER -->
    <header class="main-header">
      <nav class="navbar navbar-expand-lg navbar-dark main-header">
        <div class="container">

          <!-- Marca -->
          <router-link
            to="/"
            class="navbar-brand main-header__brand"
          >
            Aurora
          </router-link>

          <!-- Botón hamburguesa -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Abrir menú de navegación"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Menú -->
          <div class="collapse navbar-collapse" id="navbarMain">
            <ul class="navbar-nav ms-auto main-header__nav">

              <!-- HOME -->
              <li class="nav-item">
                <router-link
                  to="/"
                  class="nav-link main-header__link"
                >
                  Home
                </router-link>
              </li>

              <!-- ACERCA -->
              <li class="nav-item">
                <router-link
                  to="/acerca"
                  class="nav-link main-header__link"
                >
                  Acerca de
                </router-link>
              </li>

              <!-- FAVORITOS: solo si hay sesión -->
              <li class="nav-item" v-if="isAuthenticated">
                <router-link
                  to="/favoritos"
                  class="nav-link main-header__link"
                >
                  Favoritos
                </router-link>
              </li>

              <!-- LOGIN: solo si NO hay sesión -->
              <li class="nav-item" v-if="!isAuthenticated">
                <router-link
                  to="/login"
                  class="nav-link main-header__link"
                >
                  Login
                </router-link>
              </li>

              <!-- USUARIO LOGUEADO -->
              <li class="nav-item d-flex align-items-center gap-2" v-else>
                <span class="nav-link main-header__link mb-0">
                  Hola, {{ usuario.nombre }}
                </span>

                <button
                  @click="cerrarSesion"
                  class="btn btn-sm btn-primary"
                  type="button"
                >
                  Salir
                </button>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>

    <!-- CONTENIDO -->
    <router-view />

    <!-- FOOTER -->
    <footer class="main-footer">
      <div class="container">
        <p class="main-footer__text mb-1 fw-semibold">
          Aurora · Tu clima en Chile
        </p>

        <p class="main-footer__text mb-0 small">
          Proyecto académico con Vue, Bootstrap y JavaScript - Evanny Zapata.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapGetters(['isAuthenticated', 'usuario'])
  },

  methods: {
    ...mapActions(['logout']),

    cerrarSesion() {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>
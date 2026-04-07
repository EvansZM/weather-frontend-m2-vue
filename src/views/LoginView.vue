<template>
  <main class="login-page">
    <section class="login">
      <div class="login__card">
        <div class="login__header">
          <p class="login__eyebrow mb-2">Aurora · Acceso de usuario</p>

          <h1 class="login__title">Iniciar sesión</h1>

          <p class="login__subtitle">
            Ingresa con tu cuenta para guardar y administrar tus ciudades favoritas.
          </p>
        </div>

        <form @submit.prevent="handleLogin" class="login__form">
          <input
            v-model="email"
            type="email"
            placeholder="Correo electrónico"
            class="login__input"
            required
          />

          <input
            v-model="password"
            type="password"
            placeholder="Contraseña"
            class="login__input"
            required
          />

          <button type="submit" class="login__btn">
            Entrar
          </button>

          <p v-if="error" class="login__error">
            {{ error }}
          </p>
        </form>

        <div class="login__demo">
          <p class="login__demo-title mb-2">Cuenta de prueba</p>
          <p class="mb-1"><strong>Correo:</strong> test@test.com</p>
          <p class="mb-0"><strong>Contraseña:</strong> 1234</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',

  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },

  methods: {
    ...mapActions(['login']),

    async handleLogin() {
      this.error = ''

      const success = await this.login({
        email: this.email,
        password: this.password
      })

      if (success) {
        this.$router.push('/')
      } else {
        this.error = 'Usuario o contraseña incorrectos'
      }
    }
  }
}
</script>
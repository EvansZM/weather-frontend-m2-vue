<template>
  <main class="home-page py-4">
    <div class="container">
      <!-- HERO -->
      <section class="home-page__hero-section mb-2">
        <div class="home-page__hero text-center">
          <h1 class="home-page__title display-6 fw-bold mb-2">
            Aurora · Tu clima en Chile
          </h1>

          <p class="home-page__description mb-0">
            Consulta el clima actual y revisa el detalle con información de humedad,
            viento y pronóstico semanal.
          </p>
        </div>
      </section>

      <!-- INFORMACIÓN -->
      <section class="home-page__info-section mt-3 mb-4">
        <div class="home-page__info-box home-page__panel">
          <h2 class="home-page__section-title h5 fw-bold mb-2">
            Información climática
          </h2>

          <p class="home-page__info-text mb-3">
            Los datos presentados en esta aplicación son de carácter referencial
            y tienen fines académicos. Selecciona una ciudad para revisar el
            detalle del clima y el pronóstico semanal.
          </p>

          <div class="home-page__legend d-flex flex-wrap gap-2">
            <span class="badge text-bg-warning">☀️ Despejado</span>
            <span class="badge text-bg-secondary">☁️ Nublado</span>
            <span class="badge text-bg-success">🌧️ Lluvia</span>
            <span class="badge text-bg-info">💨 Viento</span>
          </div>
        </div>
      </section>

      <!-- ESTADO -->
      <section class="home-page__places" aria-label="Listado de ciudades">
        <div v-if="mensajeEstado" :class="claseEstado" class="mb-3 text-center">
          {{ mensajeEstado }}
        </div>

        <!-- BUSCADOR -->
        <section class="home-page__search-section mb-4">
          <div class="home-page__search-box">
            <label for="busqueda-ciudad" class="home-page__search-label fw-semibold mb-2">
              Buscar ciudad
            </label>

            <div class="home-page__search-input-wrapper">
              <span class="home-page__search-icon">🔍</span>

              <input
                id="busqueda-ciudad"
                v-model="busqueda"
                type="text"
                class="form-control home-page__search-input"
                placeholder="Escribe una ciudad, por ejemplo: Arica o Santiago"
              />
            </div>

            <p v-if="busqueda" class="home-page__search-help mt-2 mb-0">
              Mostrando resultados para: <strong>{{ busqueda }}</strong>
            </p>

            <p
              v-if="!mensajeEstado && lugaresFiltrados.length === 0"
              class="home-page__search-empty mt-2 mb-0"
            >
              No se encontraron ciudades 😿
            </p>
          </div>
        </section>

        <!-- GRID DE CARDS -->
        <div class="row g-3">
          <article
            v-for="item in lugaresFiltrados"
            :key="item.id"
            class="col-12 col-sm-6 col-lg-3"
          >
            <div class="card place-card h-100">
              <img
                :src="item.imagen"
                class="card-img-top place-card__image"
                :alt="`Vista de ${item.nombre}`"
              />

              <div class="card-body place-card__body">
                <h2 class="h5 card-title place-card__title mb-1">
                  {{ item.nombre }}
                </h2>

                <p class="place-card__text mb-2">
                  <span class="fw-bold">{{ item.temperatura }}°C</span>
                  <span class="badge ms-1 text-capitalize" :class="item.claseBadge">
                    {{ item.estado }}
                  </span>
                </p>

                <!-- BOTÓN TOGGLE DE FAVORITO -->
                <button
                  v-if="isAuthenticated"
                  @click="toggleFavorito(item.nombre)"
                  class="btn w-100 mb-2"
                  :class="esFavorito(item.nombre) ? 'btn-danger' : 'btn-outline-danger'"
                  type="button"
                >
                  {{ esFavorito(item.nombre) ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos' }}
                </button>

                <router-link
                  :to="`/lugar/${item.slug}`"
                  class="btn btn-primary btn-lg w-100 place-card__button"
                >
                  Ver detalle
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
// Importa los datos base de lugares
import { lugares } from '../data/lugares'

// Importa la función para consultar clima actual
import { obtenerClimaActual } from '../services/apiClient'

// Importamos helpers de Vuex
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',

  data() {
    return {
      lugaresConClima: [],
      mensajeEstado: '',
      claseEstado: '',
      busqueda: ''
    }
  },

  computed: {
    // Traemos datos desde Vuex
    ...mapGetters(['isAuthenticated', 'favoritos']),

    // Filtra ciudades según la búsqueda
    lugaresFiltrados() {
      if (!this.busqueda) return this.lugaresConClima

      return this.lugaresConClima.filter(lugar =>
        lugar.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      )
    }
  },

  methods: {
    // Importamos la action toggle del store
    ...mapActions(['toggleFavorito']),

    // Devuelve true o false según si la ciudad está en favoritos
    esFavorito(nombreLugar) {
      return this.favoritos.includes(nombreLugar)
    },

    // Devuelve la clase del badge según el estado del clima
    obtenerClaseBadge(estado = '') {
      const estadoNormalizado = estado.toLowerCase()

      if (
        estadoNormalizado.includes('soleado') ||
        estadoNormalizado.includes('despejado') ||
        estadoNormalizado.includes('clear')
      ) {
        return 'text-bg-warning'
      }

      if (
        estadoNormalizado.includes('nublado') ||
        estadoNormalizado.includes('cloud')
      ) {
        return 'text-bg-secondary'
      }

      if (
        estadoNormalizado.includes('lluvia') ||
        estadoNormalizado.includes('llovizna') ||
        estadoNormalizado.includes('chubascos') ||
        estadoNormalizado.includes('rain') ||
        estadoNormalizado.includes('drizzle')
      ) {
        return 'text-bg-success'
      }

      if (
        estadoNormalizado.includes('viento') ||
        estadoNormalizado.includes('brisa') ||
        estadoNormalizado.includes('wind')
      ) {
        return 'text-bg-info'
      }

      return 'text-bg-primary'
    },

    // Carga el clima actual de todas las ciudades
    async cargarLugaresConClima() {
      this.mensajeEstado = 'Cargando clima de las ciudades...'
      this.claseEstado = ''

      try {
        const resultados = await Promise.all(
          lugares.map(async (lugar) => {
            try {
              const clima = await obtenerClimaActual(lugar.lat, lugar.lon)

              const estado = clima?.weather?.[0]?.description || 'No disponible'
              const temperatura =
                clima?.main?.temp !== undefined
                  ? Math.round(clima.main.temp)
                  : '--'

              return {
                ...lugar,
                estado,
                temperatura,
                claseBadge: this.obtenerClaseBadge(estado),
                imagen: lugar.imagen
              }
            } catch (error) {
              console.error(`Error al cargar clima de ${lugar.nombre}:`, error)

              return {
                ...lugar,
                estado: 'Error al cargar',
                temperatura: '--',
                claseBadge: 'text-bg-danger',
                imagen: lugar.imagen
              }
            }
          })
        )

        this.lugaresConClima = resultados
        this.mensajeEstado = ''
        this.claseEstado = ''
      } catch (error) {
        console.error('Error general al renderizar el home:', error)

        this.lugaresConClima = []
        this.mensajeEstado = 'No fue posible cargar la información del clima.'
        this.claseEstado = 'text-danger'
      }
    }
  },

  mounted() {
    this.cargarLugaresConClima()
  }
}
</script>
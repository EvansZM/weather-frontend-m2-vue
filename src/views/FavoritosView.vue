<template>
  <section class="favoritos container py-4">
    <h2 class="mb-4">❤️ Mis lugares favoritos</h2>

    <!-- MENSAJE SI NO HAY FAVORITOS -->
    <div v-if="lugaresFavoritos.length === 0" class="alert alert-info">
      No tienes lugares favoritos aún.
    </div>

    <!-- LISTADO CON IMÁGENES -->
    <div class="row g-3" v-else>
      <article
        v-for="lugar in lugaresFavoritos"
        :key="lugar.id"
        class="col-12 col-sm-6 col-lg-4"
      >
        <div class="card h-100 shadow-sm favoritos__card">
          <img
            :src="lugar.imagen"
            class="card-img-top favoritos__image"
            :alt="`Vista de ${lugar.nombre}`"
          />

          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-2">{{ lugar.nombre }}</h5>

            <p class="text-muted mb-3">
              Acceso rápido a una ciudad marcada como favorita.
            </p>

            <div class="mt-auto d-flex gap-2">
              <router-link
                :to="`/lugar/${lugar.slug}`"
                class="btn btn-primary w-100"
              >
                Ver detalle
              </router-link>

              <button
                @click="quitarFavorito(lugar.nombre)"
                class="btn btn-outline-danger"
                type="button"
              >
                ❤️
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
// Importamos getters y actions desde Vuex
import { mapGetters, mapActions } from 'vuex'

// Importamos los lugares base para poder cruzar nombres con imágenes y slugs
import { lugares } from '../data/lugares'

export default {
  name: 'FavoritosView',

  computed: {
    // Traemos favoritos desde Vuex
    ...mapGetters(['favoritos']),

    // Construimos una lista de objetos completos a partir de los nombres guardados en favoritos
    lugaresFavoritos() {
      return lugares.filter(lugar => this.favoritos.includes(lugar.nombre))
    }
  },

  methods: {
    // Importamos la action para quitar favoritos
    ...mapActions(['quitarFavorito'])
  }
}
</script>
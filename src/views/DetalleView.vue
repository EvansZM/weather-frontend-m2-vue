<template>
  <main class="place-detail py-4">
    <div v-if="error" class="container py-5">
      <div class="place-detail__box p-4 text-center">
        <h1 class="place-detail__title display-6 fw-bold mb-3">
          Detalle no disponible
        </h1>

        <p class="place-detail__description mb-4">
          {{ error }}
        </p>

        <router-link to="/" class="btn btn-primary">
          Volver al home
        </router-link>
      </div>
    </div>

    <div v-else-if="cargando" class="container py-5">
      <div class="place-detail__box p-4 text-center">
        <h1 class="place-detail__title display-6 fw-bold mb-3">
          Cargando detalle...
        </h1>

        <p class="place-detail__description mb-0">
          Obteniendo información del clima y pronóstico.
        </p>
      </div>
    </div>

    <div v-else-if="lugar" class="container">
      <!-- PRESENTACIÓN -->
      <section class="place-detail__section mb-4">
        <div class="place-detail__box p-4 p-md-5">
          <!-- Breadcrumb -->
          <nav class="breadcrumb-nav mb-3">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/" class="breadcrumb-nav__link">
                  Home
                </router-link>
              </li>

              <li class="breadcrumb-item active">
                {{ lugar.nombre }}
              </li>
            </ol>
          </nav>

          <!-- Título -->
          <h1 class="place-detail__title display-6 fw-bold mb-2">
            {{ lugar.nombre }}
          </h1>

          <!-- Descripción -->
          <p class="place-detail__description mb-3">
            Consulta las condiciones climáticas actuales y el pronóstico estimado
            para los próximos días en la ciudad de {{ lugar.nombre }}.
          </p>

          <!-- Resumen -->
          <div class="place-detail__summary d-flex flex-wrap align-items-center gap-3">
            <span class="badge fs-6" :class="claseBadgeActual">
              {{ estadoActualTraducido }}
            </span>

            <span class="fw-semibold fs-5">
              {{ temperaturaActual }}°C
            </span>
          </div>
        </div>
      </section>

      <!-- INFO CIUDAD -->
      <section class="place-detail__section mb-4">
        <div class="place-detail__box p-4">
          <h2 class="place-detail__subtitle h4 fw-bold mb-3">
            Sobre la ciudad
          </h2>

          <p class="place-detail__text mb-3">
            {{ lugar.info.descripcion }}
          </p>

          <div class="row g-3">
            <article class="col-12 col-sm-6 col-lg-3">
              <div class="card place-detail__info-card h-100 shadow-sm">
                <div class="card-body">
                  <h3 class="h6 text-muted mb-1">Región</h3>
                  <p class="mb-0 fw-semibold">{{ lugar.region }}</p>
                </div>
              </div>
            </article>

            <article class="col-12 col-sm-6 col-lg-3">
              <div class="card place-detail__info-card h-100 shadow-sm">
                <div class="card-body">
                  <h3 class="h6 text-muted mb-1">Altitud</h3>
                  <p class="mb-0 fw-semibold">{{ lugar.info.altitud }}</p>
                </div>
              </div>
            </article>

            <article class="col-12 col-sm-6 col-lg-3">
              <div class="card place-detail__info-card h-100 shadow-sm">
                <div class="card-body">
                  <h3 class="h6 text-muted mb-1">Población</h3>
                  <p class="mb-0 fw-semibold">{{ lugar.info.poblacion }}</p>
                </div>
              </div>
            </article>

            <article class="col-12 col-sm-6 col-lg-3">
              <div class="card place-detail__info-card h-100 shadow-sm">
                <div class="card-body">
                  <h3 class="h6 text-muted mb-1">Clima</h3>
                  <p class="mb-0 fw-semibold">{{ lugar.info.clima }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- CLIMA ACTUAL -->
      <section class="place-detail__section mb-4">
        <h2 class="place-detail__subtitle h4 fw-bold mb-3">
          Clima actual
        </h2>

        <div class="row g-3">
          <!-- Imagen -->
          <div class="col-12 col-lg-6">
            <article class="card place-detail__climate-card h-100 shadow-sm">
              <img
                :src="lugar.imagen"
                class="card-img-top place-detail__image"
                :alt="`Vista de ${lugar.nombre}`"
              />

              <div class="card-body">
                <p class="mb-0">{{ descripcionClimaActual }}</p>
              </div>
            </article>
          </div>

          <!-- Métricas -->
          <div class="col-12 col-lg-6">
            <div class="row g-3">
              <article class="col-12 col-sm-6">
                <div class="card place-detail__metric-card h-100 shadow-sm">
                  <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Temperatura</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                      {{ temperaturaActual }}°C
                    </p>
                  </div>
                </div>
              </article>

              <article class="col-12 col-sm-6">
                <div class="card place-detail__metric-card h-100 shadow-sm">
                  <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Humedad</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                      {{ humedadActual }}%
                    </p>
                  </div>
                </div>
              </article>

              <article class="col-12 col-sm-6">
                <div class="card place-detail__metric-card h-100 shadow-sm">
                  <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Viento</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                      {{ vientoActual }} km/h
                    </p>
                  </div>
                </div>
              </article>

              <article class="col-12 col-sm-6">
                <div class="card place-detail__metric-card h-100 shadow-sm">
                  <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Sensación térmica</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                      {{ sensacionActual }}°C
                    </p>
                  </div>
                </div>
              </article>

              <article class="col-12 col-sm-6">
                <div class="card place-detail__metric-card h-100 shadow-sm">
                  <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Mínima semanal</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                      {{ estadisticas.minimaSemana }}°C
                    </p>
                  </div>
                </div>
              </article>

              <article class="col-12 col-sm-6">
                <div class="card place-detail__metric-card h-100 shadow-sm">
                  <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Máxima semanal</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                      {{ estadisticas.maximaSemana }}°C
                    </p>
                  </div>
                </div>
              </article>

              <article class="col-12">
                <div class="card place-detail__metric-card h-100 shadow-sm">
                  <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Promedio semanal</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-2">
                      {{ estadisticas.promedioSemana }}°C
                    </p>

                    <p class="mb-3">{{ estadisticas.resumen }}</p>

                    <h3 class="h6 text-muted mb-2">Alertas de clima</h3>
                    <ul class="mb-0">
                      <li
                        v-for="alerta in estadisticas.alertas"
                        :key="alerta"
                      >
                        {{ alerta }}
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- PRONÓSTICO -->
      <section class="place-detail__section mb-4">
        <h2 class="place-detail__subtitle h4 fw-bold mb-3">
          Pronóstico semanal
        </h2>

        <div class="row g-3">
          <article
            v-for="dia in pronosticoSemanal"
            :key="dia.fecha"
            class="col-12 col-sm-6 col-lg-4 col-xl-3"
          >
            <div class="card place-detail__forecast-card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="h5 card-title">{{ dia.dia }}</h3>
                <p class="fs-3 mb-2">{{ dia.icono }}</p>
                <span class="badge mb-2" :class="obtenerClaseBadge(dia.estado)">
                  {{ dia.estado }}
                </span>
                <p class="mb-1"><strong>Máx:</strong> {{ dia.max }}°C</p>
                <p class="mb-0"><strong>Mín:</strong> {{ dia.min }}°C</p>
              </div>
            </div>
          </article>

          <article class="col-12">
            <div class="card place-detail__forecast-card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="h5 card-title mb-3">Estadísticas de la semana</h3>

                <p class="mb-2">
                  <strong>Temperatura mínima:</strong>
                  {{ estadisticas.minimaSemana }}°C
                </p>

                <p class="mb-2">
                  <strong>Temperatura máxima:</strong>
                  {{ estadisticas.maximaSemana }}°C
                </p>

                <p class="mb-3">
                  <strong>Temperatura promedio:</strong>
                  {{ estadisticas.promedioSemana }}°C
                </p>

                <h4 class="h6 fw-bold mb-2">Cantidad de días por tipo de clima</h4>
                <ul class="mb-3">
                  <li
                    v-for="([estado, cantidad], index) in Object.entries(estadisticas.conteoEstados || {})"
                    :key="`${estado}-${index}`"
                  >
                    <strong>{{ estado }}:</strong> {{ cantidad }} día(s)
                  </li>
                </ul>

                <p class="mb-0">
                  <strong>Resumen:</strong> {{ estadisticas.resumen }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { lugares } from '../data/lugares'
import { obtenerClimaActual, obtenerPronostico } from '../services/apiClient'

export default {
  name: 'DetalleView',

  data() {
    return {
      lugar: null,
      climaActualData: null,
      pronosticoSemanal: [],
      estadisticas: {
        minimaSemana: '--',
        maximaSemana: '--',
        promedioSemana: '--',
        conteoEstados: {},
        estadoPredominante: 'No disponible',
        resumen: 'No hay datos suficientes para calcular estadísticas.',
        alertas: []
      },
      cargando: true,
      error: null
    }
  },

  computed: {
    slugActual() {
      return this.$route.params.slug
    },

    estadoActualTraducido() {
      return this.traducirEstadoClima(
        this.climaActualData?.weather?.[0]?.description || 'No disponible'
      )
    },

    claseBadgeActual() {
      return this.obtenerClaseBadge(this.estadoActualTraducido)
    },

    temperaturaActual() {
      return this.climaActualData?.main?.temp !== undefined
        ? Math.round(this.climaActualData.main.temp)
        : '--'
    },

    humedadActual() {
      return this.climaActualData?.main?.humidity ?? '--'
    },

    vientoActual() {
      return this.climaActualData?.wind?.speed !== undefined
        ? Math.round(this.climaActualData.wind.speed * 3.6)
        : '--'
    },

    sensacionActual() {
      return this.climaActualData?.main?.feels_like !== undefined
        ? Math.round(this.climaActualData.main.feels_like)
        : '--'
    },

    descripcionClimaActual() {
      return this.capitalizarTexto(
        this.climaActualData?.weather?.[0]?.description || 'Condiciones no disponibles.'
      )
    }
  },

  methods: {
    obtenerLugarPorSlug(slug) {
      return lugares.find((lugar) => lugar.slug === slug)
    },

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

    traducirEstadoClima(estado = '') {
      const texto = estado.toLowerCase()

      if (texto.includes('clear')) return 'Despejado'
      if (texto.includes('cloud')) return 'Nublado'
      if (texto.includes('rain')) return 'Lluvia'
      if (texto.includes('drizzle')) return 'Llovizna'
      if (texto.includes('thunderstorm')) return 'Tormenta'
      if (texto.includes('snow')) return 'Nieve'
      if (texto.includes('mist') || texto.includes('fog') || texto.includes('haze')) return 'Neblina'
      if (texto.includes('wind')) return 'Viento'

      return this.capitalizarTexto(estado)
    },

    capitalizarTexto(texto = '') {
      if (!texto) return ''
      return texto.charAt(0).toUpperCase() + texto.slice(1)
    },

    obtenerNombreDia(fechaTexto) {
      const fecha = new Date(`${fechaTexto}T12:00:00`)
      return fecha.toLocaleDateString('es-CL', { weekday: 'long' })
    },

    obtenerIconoClima(estado = '') {
      const texto = estado.toLowerCase()

      if (texto.includes('despejado') || texto.includes('clear')) return '☀️'
      if (texto.includes('nublado') || texto.includes('cloud')) return '☁️'
      if (texto.includes('lluvia') || texto.includes('rain')) return '🌧️'
      if (texto.includes('llovizna') || texto.includes('drizzle')) return '🌦️'
      if (texto.includes('viento') || texto.includes('wind')) return '💨'
      if (texto.includes('tormenta')) return '⛈️'
      if (texto.includes('nieve')) return '❄️'
      if (texto.includes('neblina')) return '🌫️'

      return '🌤️'
    },

    procesarPronosticoSemanal(dataPronostico) {
      if (!dataPronostico?.list || dataPronostico.list.length === 0) {
        return []
      }

      const diasAgrupados = {}

      dataPronostico.list.forEach((item) => {
        const fecha = item.dt_txt.split(' ')[0]

        if (!diasAgrupados[fecha]) {
          diasAgrupados[fecha] = []
        }

        diasAgrupados[fecha].push(item)
      })

      return Object.entries(diasAgrupados)
        .slice(0, 5)
        .map(([fecha, registros]) => {
          const maximas = registros.map((registro) => registro.main.temp_max)
          const minimas = registros.map((registro) => registro.main.temp_min)
          const registroCentral = registros[Math.floor(registros.length / 2)]
          const estadoOriginal = registroCentral.weather?.[0]?.description || 'No disponible'
          const estado = this.traducirEstadoClima(estadoOriginal)

          return {
            fecha,
            dia: this.capitalizarTexto(this.obtenerNombreDia(fecha)),
            estado,
            icono: this.obtenerIconoClima(estado),
            max: Math.round(Math.max(...maximas)),
            min: Math.round(Math.min(...minimas))
          }
        })
    },

    calcularEstadisticas(pronosticoSemanal) {
      if (!pronosticoSemanal || pronosticoSemanal.length === 0) {
        return {
          minimaSemana: '--',
          maximaSemana: '--',
          promedioSemana: '--',
          conteoEstados: {},
          estadoPredominante: 'No disponible',
          resumen: 'No hay datos suficientes para calcular estadísticas.',
          alertas: []
        }
      }

      let maximaSemana = pronosticoSemanal[0].max
      let minimaSemana = pronosticoSemanal[0].min
      let sumaTemperaturas = 0
      const conteoEstados = {}

      for (const dia of pronosticoSemanal) {
        if (dia.max > maximaSemana) maximaSemana = dia.max
        if (dia.min < minimaSemana) minimaSemana = dia.min

        sumaTemperaturas += (dia.max + dia.min) / 2

        if (!conteoEstados[dia.estado]) {
          conteoEstados[dia.estado] = 0
        }

        conteoEstados[dia.estado]++
      }

      const promedioSemana = Math.round(sumaTemperaturas / pronosticoSemanal.length)

      let estadoPredominante = ''
      let mayorCantidad = 0

      for (const estado in conteoEstados) {
        if (conteoEstados[estado] > mayorCantidad) {
          mayorCantidad = conteoEstados[estado]
          estadoPredominante = estado
        }
      }

      const resumen = this.generarResumenSemanal(promedioSemana, estadoPredominante)
      const alertas = this.generarAlertas(promedioSemana, conteoEstados)

      return {
        minimaSemana,
        maximaSemana,
        promedioSemana,
        conteoEstados,
        estadoPredominante,
        resumen,
        alertas
      }
    },

    generarResumenSemanal(promedioSemana, estadoPredominante) {
      const estado = estadoPredominante.toLowerCase()

      if (estado.includes('despejado') || estado.includes('soleado')) {
        return 'Semana mayormente despejada, con temperaturas agradables y buenas condiciones para actividades al aire libre.'
      }

      if (
        estado.includes('lluvia') ||
        estado.includes('llovizna') ||
        estado.includes('chubascos')
      ) {
        if (promedioSemana <= 12) {
          return 'Semana fría y húmeda, con presencia frecuente de precipitaciones.'
        }

        return 'Semana inestable, con varios días de lluvia o llovizna.'
      }

      if (estado.includes('nublado')) {
        return 'Semana mayormente nublada, con temperaturas moderadas y ambiente estable.'
      }

      if (estado.includes('viento') || estado.includes('brisa')) {
        return 'Semana marcada por viento o brisas, con variaciones suaves de temperatura.'
      }

      return 'Semana con condiciones variables y cambios en el comportamiento del clima.'
    },

    generarAlertas(promedioSemana, conteoEstados) {
      const alertas = []

      const diasLluvia =
        (conteoEstados['Lluvia'] || 0) +
        (conteoEstados['Llovizna'] || 0)

      if (typeof promedioSemana === 'number' && promedioSemana >= 28) {
        alertas.push('🔥 Alerta de calor: la temperatura promedio semanal es elevada.')
      }

      if (diasLluvia >= 2) {
        alertas.push('🌧️ Semana lluviosa: se esperan varios días con precipitaciones.')
      }

      const diasViento = conteoEstados['Viento'] || 0
      if (diasViento >= 2) {
        alertas.push('💨 Atención: habrá varios días con presencia de viento.')
      }

      if (alertas.length === 0) {
        alertas.push('✅ Sin alertas relevantes: se esperan condiciones relativamente estables.')
      }

      return alertas
    },

    async cargarDetalle() {
      try {
        this.cargando = true
        this.error = null

        const lugar = this.obtenerLugarPorSlug(this.slugActual)

        if (!lugar) {
          this.error = 'No encontramos la ciudad solicitada. Vuelve al inicio y selecciona una opción válida.'
          return
        }

        this.lugar = lugar

        const [climaActualData, pronosticoData] = await Promise.all([
          obtenerClimaActual(lugar.lat, lugar.lon),
          obtenerPronostico(lugar.lat, lugar.lon)
        ])

        this.climaActualData = climaActualData
        this.pronosticoSemanal = this.procesarPronosticoSemanal(pronosticoData)
        this.estadisticas = this.calcularEstadisticas(this.pronosticoSemanal)

        document.title = `Aurora · Clima en ${lugar.nombre}`
      } catch (error) {
        console.error('Error al cargar el detalle:', error)
        this.error = 'Ocurrió un problema al cargar el clima o el pronóstico. Intenta nuevamente en unos momentos.'
      } finally {
        this.cargando = false
      }
    }
  },

  mounted() {
    this.cargarDetalle()
  },

  watch: {
    '$route.params.slug'() {
      this.cargarDetalle()
    }
  }
}
</script>
<template>
    <main class="about-page py-4">
        <div class="container">
            <!-- HERO -->

            <section class="about-page__hero-section mb-4">
                <div class="about-page__box text-center">
                    <nav class="breadcrumb-nav mb-3" aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="breadcrumb-nav__link">
                                    Home
                                </router-link>
                            </li>
                            <li class="breadcrumb-item active">
                                Acerca de
                            </li>
                        </ol>
                    </nav>

                    <h1 class="about-page__title display-6 fw-bold mb-2">
                        Sobre Aurora 🌦️
                    </h1>

                    <p class="about-page__description mb-4">
                        Una aplicación simple y visual para consultar el clima en distintas
                        ciudades de Chile.
                    </p>

                    <div class="about-page__hero-image-wrapper">
                        <img src="/img/prediccion-clima.webp" alt="Predicción del clima"
                            class="about-page__hero-image img-fluid" />
                    </div>
                </div>
            </section>

            <!-- SOBRE EL PROYECTO -->
            <section class="about-page__section mb-4">
                <div class="about-page__box">
                    <h2 class="about-page__section-title h4 fw-bold mb-3">
                        Sobre el proyecto
                    </h2>

                    <p class="about-page__text">
                        Aurora es un proyecto académico desarrollado con Vue, SCSS,
                        Bootstrap y JavaScript. Su objetivo es mostrar información
                        climática de forma clara, ordenada y fácil de usar.
                    </p>

                    <p class="about-page__text mb-0">
                        Esta versión refactorizada como SPA busca reforzar conceptos como
                        componentes, rutas dinámicas, reactividad e interfaz responsive.
                    </p>
                </div>
            </section>

            <!-- TECNOLOGÍAS -->

            <section class="about-page__section mb-4">
                <div class="about-page__box">
                    <h2 class="about-page__section-title h4 fw-bold mb-4">
                        Tecnologías utilizadas
                    </h2>

                    <div class="row g-3">
                        <article class="col-12 col-md-6 col-lg-3">
                            <div class="card about-page__card about-page__tech-card h-100">
                                <div class="card-body">
                                    <h3 class="h6 fw-bold mb-2">Vue.js</h3>
                                    <p class="mb-0">Construcción de la SPA con componentes.</p>
                                </div>
                            </div>
                        </article>

                        <article class="col-12 col-md-6 col-lg-3">
                            <div class="card about-page__card about-page__tech-card h-100">
                                <div class="card-body">
                                    <h3 class="h6 fw-bold mb-2">Vue Router</h3>
                                    <p class="mb-0">Navegación dinámica entre vistas.</p>
                                </div>
                            </div>
                        </article>

                        <article class="col-12 col-md-6 col-lg-3">
                            <div class="card about-page__card about-page__tech-card h-100">
                                <div class="card-body">
                                    <h3 class="h6 fw-bold mb-2">Bootstrap</h3>
                                    <p class="mb-0">Diseño responsive.</p>
                                </div>
                            </div>
                        </article>

                        <article class="col-12 col-md-6 col-lg-3">
                            <div class="card about-page__card about-page__tech-card h-100">
                                <div class="card-body">
                                    <h3 class="h6 fw-bold mb-2">SCSS</h3>
                                    <p class="mb-0">Estilos personalizados.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <!-- OBJETIVO -->
            <section class="about-page__section mb-4">
                <div class="about-page__box">
                    <h2 class="about-page__section-title h4 fw-bold mb-3">Objetivo</h2>

                    <p class="about-page__text mb-0">
                        Ofrecer una experiencia simple para consultar el clima y practicar
                        los fundamentos del desarrollo frontend moderno con Vue.
                    </p>
                </div>
            </section>

            <!-- AUTOR -->
            <section class="about-page__section">
                <div class="about-page__box">
                    <h2 class="about-page__section-title h4 fw-bold mb-3">Autor</h2>

                    <p class="about-page__text mb-1">
                        <strong>Nombre:</strong> Evanny Zapata
                    </p>

                    <p class="about-page__text mb-0">
                        <strong>Proyecto:</strong> Aurora · Tu clima en Chile
                    </p>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
export default {
    name: 'AcercaView'
}
</script>

<style scoped>
.about-page__hero-image-wrapper {
    display: flex;
    justify-content: center;
}

.about-page__hero-image {
    width: 100%;
    max-width: 720px;
    max-height: 320px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

.about-page__tech-card {
    border: 1px solid #dbe3ef;
    border-radius: 1rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.about-page__tech-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
}

.about-page__tech-card .card-body {
    padding: 1.25rem;
}

.about-page__tech-card h3 {
    color: #0b1220;
}

.about-page__tech-card p {
    color: #5b677a;
}
</style>
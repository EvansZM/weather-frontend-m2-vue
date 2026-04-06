<template>
  <main>
    <h1>Detalle del lugar</h1>
    <p>Slug recibido: {{ slug }}</p>
  </main>
</template>

<script>
export default {
  name: 'DetalleView',
  props: {
    slug: {
      type: String,
      required: true
    }
  }
}
</script>
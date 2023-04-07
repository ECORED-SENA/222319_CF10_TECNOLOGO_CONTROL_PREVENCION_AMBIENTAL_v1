<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Realizar el diagnóstico


    figure.mb-4(data-aos="fade")
      img(src='@/assets/curso/temas/tema6/img.png', alt='Imagen decorativa')   

    p.mb-4(data-aos="fade") El diagnóstico de los residuos realiza la caracterización cualitativa y cuantitativa de los residuos se identifican oportunidades de mejora en la gestión de los residuos actuales, ver figura 5.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario
          p.mb-0 #[b Figura 5] Esquema de elaboración de un diagnóstico ambiental de residuos
        figure.mb-3
          img(src='@/assets/curso/temas/tema6/fig1.svg', alt='Esquema de elaboración de un diagnóstico ambiental de residuos')
        figcaption 
          P.mb-0 Nota. Esquema para la elaboración del manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburra (2008).






</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

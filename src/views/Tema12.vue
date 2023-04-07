<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Reconocimiento de los Registro de información requeridos en la gestión de residuos

    figure.mb-5(data-aos="fade")
      img(src='@/assets/curso/temas/tema12/img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Los registros que deben solicitarte para el diagnóstico son, algunos de estos registros pueden encontrarse unificados.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img.mx-auto(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registro de la caracterización de residuos sólidos.

      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img.mx-auto(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registros de recolección de residuos sólidos.

      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img.mx-auto(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registros de almacenamiento de residuos sólidos. 

      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3.h-100
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registros de certificados de reciclaje, tratamiento y/o disposición final, actas de incineración, facturas de los residuos.

      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3.h-100
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registros de licencia ambiental y vigente de los gestores ambientales de residuos peligrosos y especiales. 

      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3.h-100
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registros de cámara de comercio de la actividad económica que ejerce los gestores de reciclaje si tienen la facultad de reciclar el tipo de residuo en cuestión. 

      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3.h-100
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registros de licencia ambiental de los transportistas de residuos peligrosos.

      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3.h-100
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registros de indicadores de gestión de residuos. 

      .col-lg-4.col-md-8.mb-4
        .bg-green2.b-radius20.p-3.h-100
          .row.align-items-center
            .col-lg-2.col-md-4
              figure.mb-0
                img(src='@/assets/curso/temas/tema12/icon.svg', alt='Icono decorativo')
            .col-lg-10.col-md-8
              p.mb-0 Registros en general que considere pertinente generados del Plan de Gestión Integral de residuos de la organización.



</template>

<script>
export default {
  name: 'Tema12',
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

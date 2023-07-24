<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        .cajon.color-secundario.bg-green.p-4.mb-4.mb-md-0
          p Apreciado aprendiz, bienvenido a este componente formativo, donde abordaremos la temática relacionada con el diagnóstico de los residuos generados. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/intro/img.png' alt='')
    
    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YbNpENyvvUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Diagnóstico de los residuos generados




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

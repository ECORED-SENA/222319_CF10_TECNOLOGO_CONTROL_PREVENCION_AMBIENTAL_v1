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
        p Con el aumento de la población, la expansión urbana y el acelerado crecimiento industrial, uno de los problemas ambientales es la alta tasa de generación de residuos sólidos; situación que trae consigo una serie de impactos ambientales negativos que demandan un adecuado manejo. Es por ello que diagnosticar la problemática de residuos sólidos de acuerdo con la naturaleza de la fuente generadora es una actividad fundamental para conocer en profundidad el manejo adecuado e inmediato que debe darse, según la actividad económica o fuente que lo genera.  En este componente formativo se encontrarán herramientas básicas y fundamentales para el desarrollo de un buen diagnóstico de los residuos según la actividad generadora.
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/intro/img.jpg' alt='Imagen decorativa para introoducción')

    
    .row.fondo-completo.mb-5.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.mx-3
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul tema-intro")
            .row.justify-content-center(titulo="Corrosivo")
              .col-md-6.mb-4.mb-md-0
                p Los residuos que se consideran como peligrosos en función de su corrosividad son aquellos muy ácidos (pH<2.0) o muy alcalinos (pH>12.5) que pueden reaccionar peligrosamente con otros residuos o provocar la migración de contaminantes tóxicos, o bien que son capaces de corroer el acero en ciertas condiciones y en cierto tiempo, con lo cual pueden llegar a fugarse de sus contenedores y liberar otros residuos (Instituto Nacional de Tecnología y Cambio Climático, 2007).
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/intro/img.jpg', alt='Texto que describa la imagen')

            div(titulo="Corrosivo")
              p Los residuos que se consideran como peligrosos en función de su corrosividad son aquellos muy ácidos (pH<2.0) o muy alcalinos (pH>12.5) que pueden reaccionar peligrosamente con otros residuos o provocar la migración de contaminantes tóxicos, o bien que son capaces de corroer el acero en ciertas condiciones y en cierto tiempo, con lo cual pueden llegar a fugarse de sus contenedores y liberar otros residuos (Instituto Nacional de Tecnología y Cambio Climático, 2007).



    
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

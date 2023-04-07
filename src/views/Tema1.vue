<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción importancia del diagnóstico de los residuos


    .row.justify-content-center.align-items-center.mb-4
      .col-md-6(data-aos="fade-right")
        p.mb-4 Pensar en la basura genera un rechazo inmediato, sin embargo, se debe convivir con ella y no solo en los hogares, sino a la vuelta de cualquier esquina. Todo esto es el resultado de las diversas actividades que realiza el hombre en su diario vivir, donde produce una cantidad excesiva de desechos, los cuales se convierten en un inconveniente mayor en su almacenamiento, disposición o eliminación. Es por esto que es necesario aprender a manejar y aprovechar adecuadamente las basuras que se producen, no verlas como en la actualidad y verlas como residuos que son objetos y que se puede transformar en otro bien con valor económico, en especial los sólidos.
        .cajon.color-secundario.bg-green.p-4.mb-4.mb-md-0
          p.mb-0 Por tanto, es importante realizar el diagnóstico de los residuos en un lugar determinado para así crear estrategias que prevengan y minimicen el impacto de los residuos y no se genere una problemática socio ambiental, aparte de esto en la sociedad existen comunidades de bajos ingresos que viven y se alimentan de los residuos, lo cual también requiere de una gestión socio ambiental.
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img.jpg', alt='Imagen decorativa')

    p(data-aos="fade") Para complementar la información se pueden visualizar los siguientes videos:


    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .row.tarjeta.bg-degrade-green.align-items-center.p-4
        .col-lg-2.col-md-2.col-6(data-aos="fade-left")
          figure
            img.px-3(src='@/assets/curso/temas/tema1/ico-yt.svg', alt='Icono Youtube')
        .col-lg-10.col-md-10.col-12
          .row
            .col-lg-12
              h5.text-white Para profundizar en el tema, se invita a revisar la sección de materiales complementarios, donde encontrará los videos: Puntaje Nacional Chile (4 abril 2013), denominado “Unidades de concentración” y otros objetos de aprendizaje que son de sumo interés para su aprendizaje.
            .col-lg-6
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=TIeU7_yqrpc" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p  #[b Enlace web.] Pinkywingi (2008, enero 19) La isla de las flores (Jorge Furtado) 
            .col-lg-6
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=BLkOZTMRCV0&feature=youtu.be" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p  #[b Enlace web.] Acciona (2018 abril 19) Generación y gestión de residuos – Sostenibilidad/Acciona


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Como empezar un diagnóstico de residuos


    .row.justify-content-center.align-items-center.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img.png', alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        p Para diseñar y poner en funcionamiento el Manejo Integral de Residuos, deben tenerse en cuenta las actividades que se desarrollan en el sitio de trabajo, de forma real y clara, con propuestas de mejoramiento continuo de los procesos y orientado a la prevención y a la minimización de riesgos para la salud y el ambiente. El compromiso debe responder claramente a las preguntas qué, cómo, cuándo, dónde, por qué, para qué y con quién.
        p Como se ve, la estructura que se plantea es la de minimizar la generación y maximizar los aprovechamientos, de tal manera que siempre se disponga de la menor cantidad de residuos en los rellenos sanitarios, como primer paso del manejo integral de residuos se requiere realizar un diagnóstico del estado actual de la gestión de residuos en la organización.


    .row.fondo-blue.align-items-center.py-5.pb-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center
          
          .row.align-items-center  
            .col-md-7.mb-4(data-aos="fade-right")
              p El grupo GAGAS es obligatorio para entidades de salud, pero se propone crearlo para las organizaciones para un mejor manejo de la gestión ambiental, crear un Grupo Administrativo de Gestión Ambiental y Sanitaria (GAGAS) que garantice la correcta formulación e implementación del Plan de Gestión Integral de Residuos (PGIRS).  Por tanto, las personas que integran el grupo serán el representante legal o su similar y demás personas, conforme a las condiciones específicas del establecimiento entre los cuales puede ser auxiliares, operarios, entre otros; que laboran y son los encargados de dar cumplimiento al Compromiso Institucional, y los responsables del plan en todos sus componentes. Para la estructura funcional se tendrá en cuenta la respectiva jerarquía que exista en el establecimiento.
            .col-md-5.mb-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema5/img2.png', alt='')
          
          .row.align-items-center
            .col-md-3.mb-4(data-aos="fade-right") 
              figure
                img(src='@/assets/curso/temas/tema5/img3.png', alt='')
            .col-md-9.mb-4(data-aos="fade-left")    
              p Dentro de las funciones del GAGAS se encuentran:
              .row.align-items-center
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b 1]. Realizar el diagnóstico ambiental y sanitario.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b 2]. Formular el Compromiso Institucional.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b 3]. Diseñar el Plan De Gestión Integral De Residuos.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b 4]. Diseñar la estructura funcional y asignar responsabilidades. 
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b 5]. Definir y establecer mecanismos de coordinación. 
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b 6]. Gestionar el presupuesto del plan.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.d-flex.align-items-center.px-4.py-3.h-105
                    p.mb-0 #[b 7]. Velar por la ejecución del plan.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b 8]. Elaborar informes y reportes a las autoridades de vigilancia y control.    








    p.mb-4(data-aos="fade") El diagnóstico de los residuos realiza la caracterización cualitativa y cuantitativa de los residuos se identifican oportunidades de mejora en la gestión de los residuos actuales, como se presenta en la siguiente figura.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario
          p.mb-0 #[b Figura 3.] Esquema de elaboración de un diagnóstico ambiental de residuos
        figure.mb-3
          img(src='@/assets/curso/temas/tema6/fig1.svg', alt='Esquema de elaboración de un diagnóstico ambiental de residuos')
        figcaption 
          P.mb-0 Nota. Tomado y adaptado de Esquema para la elaboración del manejo integral de residuos (2008).





</template>

<script>
export default {
  name: 'Tema4',
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

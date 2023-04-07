<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Como empezar un diagnóstico de residuos

    .row.justify-content-center.align-items-center.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Para diseñar y poner en funcionamiento el Manejo Integral de Residuos, deben tenerse en cuenta las actividades que se desarrollan en el sitio de trabajo, de forma real y clara, con propuestas de mejoramiento continuo de los procesos y orientado a la prevención y a la minimización de riesgos para la salud y el ambiente. El compromiso debe responder claramente a las preguntas qué, cómo, cuándo, dónde, por qué, para qué y con quién.
        p Como se ve, la estructura que se plantea es la de minimizar la generación y maximizar los aprovechamientos, de tal manera que siempre se disponga de la menor cantidad de residuos en los rellenos sanitarios, como primer paso del manejo integral de residuos se requiere realizar un diagnóstico del estado actual de la gestión de residuos en la organización, para ello se plantea los siguientes pasos:


    .row.fondo-blue.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center
          
          .col-md-12
            h4.subt.text-white.mb-4(data-aos="fade") Creación del grupo Administrativo de Gestión Ambiental y Sanitaria (GAGAS)
          
          .row.align-items-center  
            .col-md-7.mb-4(data-aos="fade-right")
              p El grupo GAGAS es obligatorio para entidades de salud, pero se propone crearlo para las organizaciones para un mejor manejo de la gestión ambiental, crear un Grupo Administrativo de Gestión Ambiental y Sanitaria (GAGAS) que garantice la correcta formulación e implementación del Plan de Gestión Integral de Residuos (PGIRS).  Por tanto, las personas que integran el grupo serán el representante legal o su similar y demás personas, conforme a las condiciones específicas del establecimiento entre los cuales puede ser auxiliares, operarios, entre otros; que laboran y son los encargados de dar cumplimiento al Compromiso Institucional, y los responsables del plan en todos sus componentes. Para la estructura funcional se tendrá en cuenta la respectiva jerarquía que exista en el establecimiento.
            .col-md-5.mb-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/tema5/img2.png', alt='Imagen decorativa')
          
          .row.align-items-center
            .col-md-3.mb-4(data-aos="fade-right") 
              figure
                img(src='@/assets/curso/temas/tema5/img3.png', alt='Imagen decorativa')
            .col-md-9.mb-4(data-aos="fade-left")    
              p Dentro de las funciones del GAGAS son:
              .row.align-items-center
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b a]. Realizar el diagnóstico ambiental y sanitario.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b b].  Formular el Compromiso Institucional.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b c]. Diseñar el Plan De Gestión Integral De Residuos.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b d]. Diseñar la estructura funcional y asignar responsabilidades. 
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b e]. Definir y establecer mecanismos de coordinación. 
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b f]. Gestionar el presupuesto del plan.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.d-flex.align-items-center.px-4.py-3.h-105
                    p.mb-0 #[b g]. Velar por la ejecución del plan.
                .col-md-4.mb-4
                  .tarjeta.bg-green3.px-4.py-3
                    p.mb-0 #[b h]. Elaborar informes y reportes a las autoridades de vigilancia y control.       





</template>

<script>
export default {
  name: 'Tema5',
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

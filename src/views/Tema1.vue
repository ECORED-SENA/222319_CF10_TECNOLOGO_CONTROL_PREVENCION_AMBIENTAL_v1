<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Importancia del diagnóstico de los residuos y conceptos generales


    .row.justify-content-center.align-items-center.mb-4
      .col-md-6(data-aos="fade-right")
        p.mb-4 Pensar en la basura genera un rechazo inmediato, sin embargo, se debe convivir con ella y no solo en los hogares, sino a la vuelta de cualquier esquina. Todo esto es el resultado de las diversas actividades que realiza el hombre en su diario vivir, donde produce una cantidad excesiva de desechos, los cuales se convierten en un inconveniente mayor en su almacenamiento, disposición o eliminación. Es por esto que es necesario aprender a manejar y aprovechar adecuadamente las basuras que se producen, no verlas como en la actualidad y verlas como residuos que son objetos y que se puede transformar en otro bien con valor económico, en especial los sólidos.
        .cajon.color-secundario.bg-green.p-4.mb-4.mb-md-0
          p.mb-0 Por tanto, es importante realizar el diagnóstico de los residuos en un lugar determinado para así crear estrategias que prevengan y minimicen el impacto de los residuos y no se genere una problemática socio ambiental, aparte de esto en la sociedad existen comunidades de bajos ingresos que viven y se alimentan de los residuos, lo cual también requiere de una gestión socio ambiental.
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img.jpg', alt='')


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .row.tarjeta.bg-degrade-green.align-items-center.p-4
        .col-lg-2.col-md-2.col-6(data-aos="fade-left")
          figure
            img.px-3(src='@/assets/curso/temas/tema1/ico-yt.svg', alt='Icono Youtube')
        .col-lg-10.col-md-10.col-12
          h5.text-white Para complementar la información se pueden visualizar los videos “La isla de las flores” y “Generación y gestión de residuos”, los cuales se encuentran en el material complementario.
            

    p.mb-4(data-aos="fade") En la aplicación del presente componente formativo se tendrán en cuenta las siguientes definiciones establecidas en la normatividad vigente:

    .row.align-items-center.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        LineaTiempoD.linea-blue
          .row(numero="1" titulo="Residuo sólido o desecho")
            p.mb-0 Es cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p. 4).
          .row(numero="2" titulo="Residuo sólido aprovechable")
            p.mb-0 Es cualquier material, objeto, sustancia o elemento sólido que no tiene valor de uso directo o indirecto para quien lo genere, pero que es susceptible de incorporación a un proceso productivo (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p. 4).
          .row(numero="3" titulo="Residuo sólido no aprovechable")
            p.mb-0 Es todo material o sustancia sólida o semisólida de origen orgánico e inorgánico, putrescible o no, proveniente de actividades domésticas, industriales, comerciales, institucionales, de servicios, que no ofrece ninguna posibilidad de aprovechamiento, reutilización o reincorporación en un proceso productivo. Son residuos sólidos que no tienen ningún valor comercial, requieren tratamiento y disposición final y por lo tanto generan costos de disposición (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p. 4). 
          .row(numero="4" titulo="Residuo peligroso")
            p.mb-0 Es aquel que, por sus características infecciosas, tóxicas, explosivas, corrosivas, inflamables, volátiles, combustibles, radiactivas o reactivas puedan causar riesgo a la salud humana o deteriorar la calidad ambiental hasta niveles que causen riesgo a la salud humana. También son residuos peligrosos aquellos que sin serlo en su forma original se transforman por procesos naturales en residuos peligrosos (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p. 4).
          .row(numero="5" titulo="Residuos anatomopatológicos")
            p.mb-0 Son aquellos residuos como partes del cuerpo, muestras de órganos, tejidos o líquidos humanos, generados con ocasión de la realización de necropsias, procedimientos médicos, remoción quirúrgica, análisis de patología, toma de biopsias o como resultado de la obtención de muestras biológicas para análisis químico, microbiológico, citológico o histológico (Ministerio de salud y protección social, 2016).
          .row(numero="6" titulo="Residuos no peligrosos")
            p.mb-0 Son aquellos producidos por el generador en desarrollo de su actividad, que no presentan ninguna de las características de peligrosidad (Ministerio de salud y protección social, 2016).
      .col-md-4.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img1.jpg', alt='')


    .row.align-items-center.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        figure 
          img(src='@/assets/curso/temas/tema2/img2.jpg', alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        LineaTiempoD.linea-blue
          .row(numero="7" titulo="Residuos especiales")
            p.mb-0 Son aquellos residuos que por su naturaleza, composición, tamaño, volumen y peso no puedan ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluye los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas, y los residuos provenientes de actividades de construcción y demás obras civiles. (Área metropolitana del Valle de Aburra, 2016, p.8)
          .row(numero="8" titulo="Lixiviado")
            p.mb-0 Es el líquido residual generado por la descomposición biológica de la parte orgánica o biodegradable de los residuos sólidos bajo condiciones aeróbicas o anaeróbicas y/o como resultado de la percolación de agua a través de los residuos en proceso de degradación (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.4).
          .row(numero="9" titulo="Reciclaje")
            p.mb-0 Es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.4).
          .row(numero="10" titulo="Reutilización")
            p.mb-0 Es la prolongación y adecuación de la vida útil de los residuos sólidos recuperados y que mediante procesos, operaciones o técnicas devuelven a los materiales su posibilidad de utilización en su función original o en alguna relacionada, sin que para ello requieran procesos adicionales de transformación (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.4).
          .row(numero="11" titulo="Disposición final")
            p.mb-0 Es el proceso de aislar y confinar los residuos o desechos peligrosos, en especial los no aprovechables, en lugares especialmente seleccionados, diseñados y debidamente autorizados, para evitar la contaminación y los daños o riesgos a la salud humana y al ambiente (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2015).
          .row(numero="12" titulo="Separación en la fuente")
            p.mb-0 Es la clasificación de los residuos sólidos en el sitio donde se generan para su posterior recuperación (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.4).
          .row(numero="13" titulo="Generador o productor")
            p.mb-0 Persona que produce residuos sólidos y es usuario del servicio (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002, p.3).


    p.mb-4(data-aos="fade") Teniendo claros los conceptos anteriores, conozcamos cuál es la jerarquía en la gestión de residuos.

    .row.justify-content-center.tarjeta.bg-gray.py-5.mb-4(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-4
          p.mb-0 #[b Figura 1.] Jerarquía en la gestión de residuos
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/fig1.svg', alt='La imagen presenta la jerarquía en la gestión de residuos, siendo el siguiente el orden: generación de residuos sólidos, separación de residuos sólidos, almacenamiento, recolección y transporte, y por último, la disposición final.')
        figcaption.bg-white 
          p.mb-0 Nota. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburra (2008).





      
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

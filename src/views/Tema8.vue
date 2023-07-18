<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Informe de diagnóstico de residuos

    
    p.mb-4(data-aos="fade") En el diagnóstico se debe establecer información sobre el funcionamiento de la organización y la descripción general del proceso productivo. Los pasos son:

    .titulo-sexto.color-secundario.mb-4
      p.mb-0 #[b Tabla 2.] Pasos para desarrollar el diagnóstico de la organización

    .tabla-a.tema13.mb-4(data-aos="fade-down")
      table
        caption.mt-2 
          p.mb-0 Nota. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburra (2008). 
        thead
          tr.bg-green2
            th Pasos
            th Componente del diagnóstico
            th Descripción
        tbody.bg-white    
          tr
            td.text-center.text-bold(rowspan="6") PASO 1
            td(rowspan="6") Información general.
          tr
            td Describir la actividad que desarrolla, operaciones involucradas, jornadas laborales.
          tr
            td Número de personas que habitan, laboran, acuden, estudian o visitan las instalaciones de la organización.
          tr
            td Describir las dependencias con las que cuenta y los procesos productivos que se llevan a cabo.
          tr
            td Describir mediante flujogramas las materias primas e insumos utilizados, los productos elaborados y los residuos generados.
          tr
            td Cuantificar los residuos generados a partir de la tarifa de aseo en un período de tiempo no menor a seis meses.
          tr
            td.text-center.text-bold(rowspan="3") PASO 2
            td(rowspan="3") Generación de residuos sólidos.
          tr
            td Identificar los puntos de generación de residuos sólidos como zona de bodega o almacenamiento, planta de producción, oficinas, cocineta, punto de ventas, etc.
          tr
            td Identificar, clasificar y cuantificar los residuos peligrosos y no peligrosos generados, de acuerdo con los conocimientos básicos.
          tr
            td.text-center.text-bold(rowspan="4") PASO 3
            td(rowspan="4") Almacenamiento de los residuos sólidos. 
          tr
            td Describir cómo son los sitios de almacenamiento temporal y almacenamiento definitivo de los residuos sólidos en la organización.
          tr
            td Describir las técnicas y los horarios de recolección y transporte interno de los residuos desde los puntos de almacenamiento temporal hasta el sitio de almacenamiento definitivo.
          tr
            td Elaborar un mapa con los sitios de almacenamiento temporal y definitivo, además de la ruta establecida para recolección de los residuos sólidos.
          tr
            td.text-center.text-bold(rowspan="5") PASO 4
            td(rowspan="5") Caracterización y aforo de los residuos generados.
          tr
            td Realizar el aforo de los residuos no peligrosos y peligrosos generados en un período de tiempo que corresponda con los procesos productivos de la organización.
          tr
            td Realizar la caracterización física de los residuos no peligrosos y los peligrosos generados en un período de tiempo que corresponda con los procesos productivos de la organización.
          tr
            td Describir si existe aprovechamiento de los residuos sólidos ya sea mediante reciclaje, reutilización o compostaje.
          tr
            td Elaborar informe de caracterización.
          tr
            td.text-center.text-bold PASO 5
            td Clasificación de tipo de generador.
            td Clasificar como generador a la organización a partir de la cantidad de residuos peligrosos y no peligrosos generados de acuerdo con el Decreto 4741 de 2005 y la Resolución CRA 351 de 2005, respectivamente.
          tr
            td.text-center.text-bold PASO 6
            td Alternativas de manejo externo de los residuos generados.
            td 
              p.mb-3 Describir las diferentes alternativas de manejo externo de los residuos peligrosos y no peligrosos, ya sean:
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Reciclaje.
                li 
                  i.fas.fa-check
                  | Reutilización.
                li 
                  i.fas.fa-check
                  | Compostaje.
                li 
                  i.fas.fa-check
                  | Incineración.
                li 
                  i.fas.fa-check
                  |Inertización.
                li 
                  i.fas.fa-check
                  | Otros.
          tr
            td.text-center.text-bold PASO 7
            td Plan de Contingencias.
            td Determinar la existencia o no, de medidas de contingencia para prevenir o contener accidentes en el manejo de los residuos sólidos, sean internas o externas.
          tr
            td.text-center.text-bold PASO 8
            td Registro fotográfico.
            td Elaborar un registro fotográfico del diagnóstico levantado.
          tr
            td.text-center.text-bold PASO 9
            td Análisis y conclusiones.
            td Analizar y concluir sobre la información obtenida durante el diagnóstico, de tal manera que se establezca la situación actual de la organización.

    p.mb-4(data-aos="fade") Los resultados obtenidos del diagnóstico permiten la definición de una línea base sobre el manejo de los residuos sólidos, logrando conocer cualitativa y cuantitativamente los residuos generados y cuál es su manejo actual. Con este diagnóstico se podrán establecer propuestas de solución medidas de prevención y mitigación de los residuos, el cual se establecen como plan de acción de la gestión de los residuos.
  


    

</template>

<script>
export default {
  name: 'Tema8',
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

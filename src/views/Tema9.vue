<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Reconocimiento de la recolección de los residuos

    p.mb-4(data-aos="fade") Se recomienda establecer la existencia y ubicación de las rutas de recolección dentro de la organización, evaluando las características que debe cumplir como, ver tabla 7:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-lg-10
        .titulo-sexto.color-secundario.mb-3
          p.mb-0 #[b Tabla 7] Actividades inherentes a la recolección interna de residuos
        
        .tabla-a.tema9.color-acento-botones.mb-5 
          table
            caption.bg-gray  
              p.mb-0 Nota. Área metropolitana del valle de aburra (2016).
            thead
              tr.bg-green2
                th DESCRIPCIÓN
                th CUMPLE
                th NO CUMPLE
            tbody.bg-white  
              tr
                td 1. Tiene definidas rutas de recolección. 
                td 
                td 
              tr
                td 2. Establece horarios y frecuencias de recolección.
                td 
                td 
              tr
                td 3. Realiza la recolección selectiva de los residuos en los puntos de generación.
                td 
                td 
              tr
                td 4. Los elementos empleados para la recolección de residuos peligrosos son de uso exclusivo para este fin. 
                td 
                td 
              tr
                td 5. Las personas que realizan esta actividad cuentan con los elementos de protección personal necesarios como tapabocas, guantes, gafas, etc.
                td 
                td 
              tr
                td 6. En caso de ser necesario (por cantidades, distancias y tipo de residuos) se cuenta con equipos de cargue y movilización.
                td 
                td 
    
    
    h5.subt.text-white.mb-3(data-aos="fade") Ruta de recolección de residuos

    p.mb-4(data-aos="fade") La organización requiere tener un plano de ruta de recolección de residuos en donde se identifique los puntos de recolección y sus recipientes, la capacidad de los recipientes, los carros recolectores, las rutas de recolección trazadas de los tipos de residuos mínimo una para peligrosos y una para no peligrosos, en la de no peligrosos muchas veces se divide en dos una de residuos no aprovechables y otra de residuos aprovechables y los horarios de recolección, ver figuras 25, 26 y 27.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-3
          p.mb-0 #[b Figura 25] Ruta sanitaria ejemplo 1
        figure
          img(src='@/assets/curso/temas/tema9/img1.jpg', alt='Ruta sanitaria ejemplo 1')
        figcaption.mb-4.bg-gray  
          p.mb-0 Nota. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburra (2008).

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-3
          p.mb-0 #[b Figura 26] Ruta sanitaria ejemplo 2
        figure
          img(src='@/assets/curso/temas/tema9/img2.jpg', alt='Ruta sanitaria ejemplo 2')
        figcaption.mb-4.bg-gray   
          p.mb-0 Nota. Área Metropolitana de Bucaramanga (2002). 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-6
        .titulo-sexto.color-secundario.mb-3
          p.mb-0 #[b Figura 27] Ejemplo ruta sanitaria laboratorio  
        figure
          img(src='@/assets/curso/temas/tema9/img3.jpg', alt='Ejemplo ruta sanitaria laboratorio ')
        figcaption.mb-4.bg-gray   
          p.mb-0 Nota. Empresa de acueducto y alcantarillado y aseo de Madrid. (2018 ).





</template>

<script>
export default {
  name: 'Tema9',
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

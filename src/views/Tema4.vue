<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normativa asociada a los residuos sólidos peligrosos y no peligrosos


    .row.justify-content-center.align-items-center
      .col-md-7(data-aos="fade-right")
        .cajon.color-secundario.bg-green.p-4.mb-4
          p.mb-0 En materia ambiental, Colombia cuenta con una de las legislaciones más desarrolladas y mejor concebidas, con una serie de normas que reglamentan cada uno de los aspectos relacionados con la conservación y utilización de los recursos naturales. Muchas de estas normas han surgido para mitigar problemas ambientales experimentados a lo largo del país, pero también han sido formuladas aprovechando la legislación de otras naciones, más avanzadas y su aplicación práctica en el territorio colombiano ha resultado muy compleja o poco eficaz.
        p Actualmente, Colombia cuenta con un amplio desarrollo normativo enmarcado en la Política Nacional para la Gestión de Residuos Sólidos emitida en 1998, actualizada en el CONPES soportada por la Constitución Nacional, la Ley 99 de 1993 y la Ley 142 de 1994, que establece tres objetivos específicos que determinan las prioridades de la gestión en residuos:
        ul.lista-ul--color.color-primario.ps-3
          li 
            i.fas.fa-check
            | Minimizar la cantidad de residuos que se generan.
          li 
            i.fas.fa-check
            | Aumentar el aprovechamiento racional de los residuos sólidos.
          li 
            i.fas.fa-check
            | Mejorar los sistemas de eliminación, tratamiento y disposición final de los residuos sólidos.
      .col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img.png', alt='Imagen decorativa')

    
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1 Leyes expedidas sobre el tema de residuos sólidos y reciclaje

    p.mb-4(data-aos="fade") En la tabla 2 se presenta una relación general de la normativa de orden nacional aplicable a la cadena asociada a la gestión de los residuos sólidos.

    .row
      .col-md-4
        a.anexo(:href="obtenerLink('downloads/Anexo_Tabla_2_Legislacion-residuos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 #[b Anexo.] Tabla_2 Legislación de residuos


    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.2 Responsabilidad del generador con los residuos

    p.mb-4(data-aos="fade") La responsabilidad del generador de los residuos está relacionada a continuación:

    h4.subt.text-white.mb-4(data-aos="fade") Responsabilidad en residuos peligrosos
    p.mb-4(data-aos="fade") De acuerdo con el decreto 1076 en el artículo 2.2.6.1.3.1. Obligaciones del Generador. De conformidad con lo establecido en la ley, en el marco de la gestión integral de los residuos o desechos peligrosos, el generador debe:

    .row.bg-blue.tarjeta.align-items-center.p-4.mb-5
      .col-md-4.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
      .col-md-8
        ol.lista-ol--cuadro.color-secundario
          li
            .lista-ol--cuadro__vineta
              span a
            | Garantizar la gestión y manejo integral de los residuos o desechos peligrosos que genera.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Elaborar un plan de gestión integral de los residuos o desechos peligrosos. 
          li 
            .lista-ol--cuadro__vineta
              span c
            | Identificar las características de peligrosidad de cada uno de los residuos o desechos peligrosos que genere.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Garantizar que el envasado o empacado, embalado y etiquetado de sus residuos o desechos peligrosos se realice conforme a la normatividad vigente.
          li 
            .lista-ol--cuadro__vineta
              span e
            | Dar cumplimiento a lo establecido en el Decreto 1609 de 2002 o aquella norma que la modifique o sustituya, cuando remita residuos o desechos peligrosos para ser transportados. 
          li 
            .lista-ol--cuadro__vineta
              span f
            | Registrarse ante la autoridad ambiental competente por una sola vez y mantener actualizada la información de su registro anualmente.
          li 
            .lista-ol--cuadro__vineta
              span g
            | Capacitar al personal encargado de la gestión y el manejo de los residuos o desechos peligrosos en sus instalaciones.
          li 
            .lista-ol--cuadro__vineta
              span h
            | Contar con un plan de contingencia.
          li 
            .lista-ol--cuadro__vineta
              span i
            | Conservar las certificaciones de almacenamiento, aprovechamiento, tratamiento o disposición final que emitan los respectivos receptores, hasta por un tiempo de cinco (5) años.
          li 
            .lista-ol--cuadro__vineta
              span j
            | Tomar todas las medidas de carácter preventivo o de control previas al cese, cierre, clausura o desmantelamiento de su actividad con el fin de evitar cualquier episodio de contaminación que pueda representar un riesgo a la salud y al ambiente, relacionado con sus residuos o desechos peligrosos.
          li 
            .lista-ol--cuadro__vineta
              span k
            | Contratar los servicios de almacenamiento, aprovechamiento, recuperación, tratamiento y/o disposición final, con instalaciones que cuenten con las licencias, permisos y autorizaciones. 

    h5.subt.text-white.mb-4(data-aos="fade") Determinación del tipo de generador de residuos peligrosos
    p.mb-4(data-aos="fade") Se requiere realizar la caracterización de residuos peligrosos para saber su cuantificación, y así determinar si la organización corresponde a alguna de las siguientes categorías establecidas por el Ministerio de Ambiente Vivienda y Desarrollo Territorial mediante el Decreto 1076 de 2015, Artículo 2.2.6.1.1.3. Definiciones.
    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/2L91WMqw96A" title="Información de programa de Tecnología en Prevención y Control Ambiental" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.subt.text-white.mb-4(data-aos="fade") Prohibiciones de residuos peligrosos
    p.mb-4(data-aos="fade") De acuerdo con el decreto 1076 Artículo 2.2.6.2.2.1. Prohibiciones, del Ministerio de Ambiente Vivienda y Desarrollo, se prohíbe: 
    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/2L91WMqw96A" title="Información de programa de Tecnología en Prevención y Control Ambiental" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    h3.subt.text-white.mb-4(data-aos="fade") Residuos con obligatoriedad de devolución posconsumo y Residuos de Aparatos Eléctricos y Electrónicos (RAEE)

    .row.justify-content-center.align-items-center
      .col-md-7.mb-4(data-aos="fade-right")
        p En el 2005, el entonces Ministerio de Ambiente, Vivienda y Desarrollo Territorial (MAVDT) formuló la 
          span.t-green.text-bold Política ambiental para la gestión integral de los residuos o desechos peligrosos
          |, que estableció que el manejo inadecuado de los residuos con características de peligrosidad (residuos peligrosos, Respel) y su disposición final junto con residuos no peligrosos, se debía principalmente a la inexistencia de un sistema de manejo separado de los residuos peligrosos.
        p En este sentido, se establecieron los 
          span.t-green.text-bold planes de gestión de devolución de productos posconsumo 
          |en Colombia, se identifican los siguientes residuos de posconsumo, con sus respectivos programas:
        p.p-4.bg-green Medicamentos vencidos, computadores e impresoras en desuso, envases de plaguicidas domésticos, bombillas fluorescentes usadas, baterías usadas plomo acido, pilas usadas, llantas usadas.
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Imagen decorativa')

    p(data-aos="fade") Así mismo, existen dos programas de devolución posconsumo que actualmente no está por normativa que es devolución posconsumo de celulares y aceites usados.

    .row.fondo-blue2.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

        .row.justify-content-center.align-items-center
          .col-md-9
            .row.mb-5
              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.text-center
                  img(src='@/assets/curso/temas/tema4/tarj-ico.svg' alt='Icono decorativo')
                  .tarjeta.color-acento-contenido
                    .p-4
                      p #[b Resolución 1511 de 2010,] Ministerio de Ambiente, Vivienda y Desarrollo Territorial, “por la cual se establecen los sistemas de recolección selectiva y gestión ambiental de residuos de bombillas y se adoptan otras disposiciones”
              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.text-center
                  img(src='@/assets/curso/temas/tema4/tarj-ico.svg' alt='Icono decorativo')
                  .tarjeta.color-acento-contenido
                    .p-4
                      p #[b Resolución 1512 de 2010,] Ministerio de Ambiente, Vivienda y Desarrollo Territorial, “por la cual se establecen los sistemas de recolección selectiva y gestión ambiental de residuos de computadores y periféricos y se adoptan otras disposiciones”.
              .col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar.text-center
                  img(src='@/assets/curso/temas/tema4/tarj-ico.svg' alt='Icono decorativo')
                  .tarjeta.color-acento-contenido
                    .p-4
                      p #[b Resolución 1297 de 2010,] Ministerio de Medio Ambiente, Vivienda y Desarrollo Territorial, “por la cual se establecen los sistemas de recolección selectiva y gestión ambiental de residuos de pilas y acumuladores y se adoptan otras disposiciones”.

          p.mb-4(data-aos="fade") La ley también estipula que los RAEE son residuos de manejo diferenciado y prohíbe su disposición final en rellenos sanitarios, para que sean recolectados y gestionados por los productores y para priorizar su aprovechamiento mediante empresas gestoras que cuenten con licencia ambiental para ello, ver figura 4. 

          .titulo-sexto.color-secundario.mb-4(data-aos="fade")
            p.mb-0 #[b Figura 4] Categorización de Aparatos Eléctricos y Electrónicos
          figure.mb-5(data-aos="fade-down")
            img(src='@/assets/curso/temas/tema4/fig4.svg', alt='Categorización de Aparatos Eléctricos y Electrónicos')
            figcaption.bg-white
              p.mb-0 Nota. Política Nacional integral de residuos de aparatos electrónicos, Minambiente (2017). 

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Requerimientos de residuos sólidos para el aprovechamiento
            p.mb-4(data-aos="fade") Según el decreto 1077 de 2015 en el Artículo 2.3.2.2.2.8.82, Requerimientos de los residuos sólidos para el aprovechamiento, en las actividades de aprovechamiento, los residuos deben cumplir por lo menos con los siguientes criterios básicos y requerimientos, para que los métodos de aprovechamiento se realicen en forma óptima:  

          .col-md-5
            .bg-green3.tarjeta.p-4.h-479
              .row.justify-content-center
                img.mb-4(src='@/assets/curso/temas/tema4/img5.png' alt='Iamgen decorativa')
                p.text-center Los residuos sólidos deben estar debidamente separados por tipo de material, de acuerdo con los lineamientos establecidos en el Plan de Gestión Integral de Residuos Sólidos (PGIRS) o en su defecto sujetándose a lo establecido en el programa de prestación por la persona prestadora de la actividad de aprovechamiento. 
          .col-md-5
            .bg-green3.tarjeta.p-4.h-479
              .row.justify-content-center
                img.mb-4(src='@/assets/curso/temas/tema4/img6.png' alt='Iamgen decorativa')
                p.text-center No deben estar contaminados con residuos peligrosos, metales pesados, ni bifenilos policlorados. 

    p(data-aos="fade") En el caso de las fracciones de residuos sólidos orgánicos biodegradables, el almacenamiento temporal no puede superar las cuarenta y ocho (48) horas.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.3 Residuos especiales

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.mb-4(data-aos="fade-right")
        p Son aquellos residuos que por su naturaleza, composición, tamaño, volumen y peso no puedan ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluye los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas, y los residuos provenientes de actividades de construcción y demás obras civiles. (Área metropolitana del valle de aburra, 2016, p.8). Algunos ejemplos de residuos especiales son: llantas usadas, ropa, colchones, muebles, escombros, lodos, camas, algunos RAEES como las antenas de telecomunicaciones por su voluminosidad.
      .col-md-6.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img7.png', alt='Imagen decorativa')


    h3.subt.text-white.mb-4(data-aos="fade") Residuos de Construcción y Demolición (RCD)
    p.mb-5(data-aos="fade") Si la organización genera algún tipo de actividad como remodelación, construcción o demolición requiere realizar el trámite con la autoridad ambiental por la generación de este tipo de residuos RCD, se enuncia lo más destacado de la norma. De acuerdo con la resolución 472 de 2017 Por la cual se reglamenta la gestión integral de los residuos generados en las actividades de Construcción y Demolición (RCD) y se dictan otras disposiciones en el artículo 2 se debe tener en cuenta las siguientes definiciones:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-11
        figure
          img(src='@/assets/curso/temas/tema4/infog.svg', alt='Residuos de Construcción y Demolición (RCD)')


    h3.subt.text-white.mb-4(data-aos="fade") Obligaciones

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        p En el artículo 15 menciona:
        p Obligaciones de los generadores de RCD. Son obligaciones de los generadores de RCD las siguientes:
        ul.lista-ul--color.color-primario.ps-3.mb-4
          li.mb-1
            i.fas.fa-check
            | Los grandes generadores deberán formular, implementar y mantener actualizado el Programa de Manejo Ambiental de RCD que se especifica en la norma.
          li 
            i.fas.fa-check
            | Los pequeños generadores tienen la obligación de entregar los RCD a un gestor de RCD para que se realicen las actividades de recolección y transporte hasta los puntos limpios, sitios de aprovechamiento o disposición final según sea el caso.
        p Para profundizar en el tema se invita a consultar la siguiente información:  
        .row.align-items-end 
          .col-md-3.col-xxl-2.px-0.mx-0
            img.ps-xl-4(src='@/assets/curso/temas/tema4/adv.svg', alt='Icono decorativo')
          .col-md-9.col-xxl-10.mx-0.bg-green4.p-4.b-r-r
            h5.mb-0.px-md-3 Matriz de requisitos legales
            p.mb-0.px-md-3 En el material complementario revise la Matriz de requisitos legales del año 2020
      .col-md-4.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img8.png', alt='Imagen decorativa')






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

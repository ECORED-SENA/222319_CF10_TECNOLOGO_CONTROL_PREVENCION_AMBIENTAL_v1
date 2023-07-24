<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de residuos


    p(data-aos="fade") Para identificar los diferentes tipos de residuos, se pueden clasificar en los siguientes criterios:

    .row.bg-gray.px-4.pb-5.mb-5
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema3/img-infog.svg', alt='Tipos de residuos según cuatro criterios principales')

        .tarjeta.bg-yellow.p-3(x="8%" y="37%" numero="+")
          p.mb-0 #[b Clasificación de los residuos según grado de peligrosidad:] se clasifican en residuos peligrosos y no peligrosos esto quiere decir según el grado de peligrosidad al medio ambiente o a la salud humana.

        .tarjeta.bg-yellow.p-3(x="11.5%" y="58%" numero="+")
          p.mb-0 #[b Clasificación de los residuos según su origen:] esto quiere decir si son de origen doméstico proveniente de los hogares, origen comercial si son propias del comercio, industrial si son del sector industrial, de escombros y residuos de construcción del sector de construcción, residuos sanitarios si son de centros y establecimientos sanitarios, residuos mineros si son de minas, residuos agrícolas si son del sector agrícola.

        .tarjeta.bg-yellow.p-3(x="50.5%" y="101%" numero="+")
          p.mb-0 #[b Clasificación de los residuos según su aprovechamiento:] se clasifican en aprovechables y no aprovechables, esto depende de cada caso en particular del residuo que se esté tratando y su estado (calidad del residuo).

        .tarjeta.bg-yellow.p-3(x="89.5%" y="58%" numero="+")
          p.mb-0 #[b Clasificación de los residuos según su biodegradabilidad:] quiere decir si es orgánico o inorgánico.

        .tarjeta.bg-yellow.p-3(x="93%" y="34%" numero="+")
          p.mb-0 #[b Clasificación según su composición:] clasificación según tipos de materiales o componentes químicos de lo que esté hecho.

    
    h3.subt.text-white.mb-3(data-aos="fade") Clasificación y características de los residuos

    p.mb-5(data-aos="fade") Los residuos son resultado de actividades domésticas, comerciales, industriales, institucionales, de prestación de servicios, entre otras. 

    h3.t-green.mb-4(data-aos="fade") Residuos Peligrosos
    p.mb-4(data-aos="fade") A continuación, se presenta el esquema que facilita la identificación de los residuos o desechos peligrosos, basados en la normatividad ambiental vigente que tiene en cuenta la mayoría de los criterios de peligrosidad establecidos en el convenio de Basilea, del cual Colombia es signataria desde al año 1995, mediante la Ley 253. Dicho convenio fue ratificado el 31 de diciembre de 1996 y entró en vigencia para Colombia desde marzo 31 de 1997.
    p.bg-green.p-4.mb-5 A esta gráfica se le conoce con la sigla de CRETIIR usada para relacionar las características que un residuo peligroso pueda tener, cada letra significa: (C: Corrosivo, R: Radioactivo, E: Explosivo, T: Tóxico, I: Inflamable, I: Infeccioso, R: Radioactivo)

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .titulo-sexto.color-secundario
          p.mb-0 #[b Figura 2.] CRETIIR
        figure
          img.px-md-3(src='@/assets/curso/temas/tema3/fig2.svg', alt='Residuos peligrosos Características: Corrosivo, Reactivo, Explosivo, Tóxico, Inflamable, Infeccioso, Radiactivo.')
          figcaption.bg-gray
            p.mb-0 Nota. Manual para el manejo integral de residuos sólidos en el valle de aburra. Área metropolitana del valle de aburra (2016). 

    
    .row.justify-content-center.align-items-center
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-gray")
          .row.justify-content-center(titulo="Corrosivo")
            .col-md-11.mb-4.mb-md-0
              p Los residuos que se consideran como peligrosos en función de su corrosividad son aquellos muy ácidos (pH<2.0) o muy alcalinos (pH>12.5) que pueden reaccionar peligrosamente con otros residuos o provocar la migración de contaminantes tóxicos, o bien que son capaces de corroer el acero en ciertas condiciones y en cierto tiempo, con lo cual pueden llegar a fugarse de sus contenedores y liberar otros residuos. (Instituto Nacional de Tecnología y Cambio Climático, 2007) 
          .row.justify-content-center(titulo="Reactivo")
            .col-md-11.mb-4.mb-md-0
              p Los residuos reactivos son aquellos que son normalmente inestables y pueden llegar a reaccionar violentamente sin explosión; que pueden formar una mezcla explosiva con el agua, generar gases tóxicos, vapores y humos; que pueden contener cianuro o sulfuro y generar gases tóxicos; o bien que pueden ocasionar explosiones en distintas situaciones, ya sea de temperatura y presión estándares, si se calientan en condiciones de confinamiento o se someten a fuerzas considerables. (Instituto Nacional de Tecnología y Cambio Climático, 2007) 
          .row.justify-content-center(titulo="Explosivo")
            .col-md-11.mb-4.mb-md-0
              p Los residuos explosivos son aquellos que tienen una constante de explosividad igual o mayor a la del dinitrobenceno, o bien que son capaces de producir una reacción o descomposición detonante o explosiva a 25ºC y a 1.03 kg/cm<sup>2</sup> de presión. (Instituto Nacional de Tecnología y Cambio Climático, 2007) 
          .row.justify-content-center(titulo="Tóxicos")
            .col-md-11.mb-4.mb-md-0
              p Los residuos tóxicos son los que contienen sustancias capaces de causar la muerte o provocar efectos nocivos en la salud de la población, en la flora o en la fauna, que varían en características y severidad de acuerdo con las formas e intensidades de la exposición. (Instituto Nacional de Tecnología y Cambio Climático, 2007) 
      .col-md-4.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img.png', alt='')

    .row.justify-content-center.align-items-center
      .col-md-5.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3.png', alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-gray")
          .row.justify-content-center(titulo="Inflamable")
            .col-md-11.mb-4.mb-md-0
              p Los residuos inflamables son aquellos capaces de causar un incendio en diferentes condiciones tales como fricción, absorción de humedad, cambios químicos espontáneos, y que al incendiarse arden tan vigorosa y persistentemente que pueden representar un riesgo. (Instituto Nacional de Tecnología y Cambio Climático, 2007) 
          .row.justify-content-center(titulo="Infeccioso")
            .col-md-11.mb-4.mb-md-0
              p A los residuos infecciosos se les conoce también como residuos biológicos o patógenos. Son aquellos que contienen microorganismos patógenos tales como bacterias, parásitos, virus, hongos, virus oncogénicos y recombinantes como sus toxinas, con el suficiente grado de virulencia y concentración que pueda producir una enfermedad infecciosa en huéspedes susceptibles. (Ministerio del Medio Ambiente, 2002, p.20) 
          .row.justify-content-center(titulo="Radioactivos")
            .col-md-11.mb-4.mb-md-0
              p Son sustancias emisoras de energía predecible y continua en forma alfa, beta o de fotones, cuya interacción con materia puede dar lugar a rayos X y neutrones. Debe entenderse que estos residuos contienen o están contaminados por radionúclidos en concentraciones o actividades superiores a los niveles de exención establecidos por la autoridad competente para el control del material radiactivo, y para los cuales no se prevé ningún uso. (Ministerio del Medio Ambiente, 2002, p.26) 



    p.mb-4(data-aos="fade") Ahora, se consideran tóxicos los residuos o desechos que se clasifican de acuerdo con los criterios de toxicidad (efectos agudos, retardados o crónicos y ecotóxicos) definidos a continuación y para los cuales, según sea necesario, las autoridades competentes establecerán los límites de control correspondiente: 

    .row.align-items-center.p-4.mb-4
      .col-md-4.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='')
      .col-md-8(data-aos="fade-left")
        ol.lista-ol--cuadro.color-secundario.ps-3.fa-ul
          li
            .lista-ol--cuadro__vineta
              span a
            | Dosis Letal media oral (DL50) para ratas menor o igual a 200 mg/kg para sólidos y menor o igual a 500 mg/kg para líquidos, de peso corporal.
          li
            .lista-ol--cuadro__vineta
              span b
            | Dosis Letal media dérmica (DL50) para ratas menor o igual de 1.000 mg/kg de peso corporal.
          li
            .lista-ol--cuadro__vineta
              span c
            | Concentración Letal media inhalatoria (CL50) para ratas menor o igual a 10 mg/l.
          li
            .lista-ol--cuadro__vineta
              span d
            | Alto potencial de irritación ocular, respiratoria y cutánea, capacidad corrosiva sobre tejidos vivos.
          li
            .lista-ol--cuadro__vineta
              span e
            | Susceptibilidad de bioacumulación y biomagnificación en los seres vivos y en las cadenas tróficas.
          li
            .lista-ol--cuadro__vineta
              span f
            | Carcinogenicidad, mutagenicidad y teratogenecidad.
          li
            .lista-ol--cuadro__vineta
              span g
            | Neurotoxicidad, inmunotoxicidad u otros efectos retardados.
          li
            .lista-ol--cuadro__vineta
              span h
            | Toxicidad para organismos superiores y microorganismos terrestres y acuáticos.
          li
            .lista-ol--cuadro__vineta
              span i
            | Otros que las autoridades competentes definan como criterios de riesgo de toxicidad humana o para el ambiente.

        p.mb-4(data-aos="fade") Además, se considera residuo o desecho tóxico aquel que, al realizársele una prueba de lixiviación para característica de toxicidad (conocida como prueba TCLP), contiene uno o más de las sustancias, elementos o compuestos que se presentan en el Decreto 1076 anexo III. Ministerio de Ambiente y Desarrollo Sostenible (2015). 
          a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153" target="_blank") 
            em.t-link https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153. 


    p.mb-4(data-aos="fade") Por otra parte, los residuos infecciosos o de riesgo biológico se clasifican en (Ministerio del Medio Ambiente, 2002): 

    TabsA.color-acento-contenido.mb-5(data-aos="fade-down")
      .row.tarjeta.bg-green7.p-4(titulo="Biosanitarios")
        .col-md-8
          h4 Biosanitarios
          p Son todos aquellos elementos que tienen contacto con materia orgánica, sangre o fluidos corporales del paciente humano o animal, tales como: gasas, apósitos, aplicadores, algodones, drenes, vendajes, ropas desechables, toallas higiénicas, pañales, entre otros similares (Ministerio del Medio Ambiente, 2002, p.21).
        .col-md-4  
          figure
            img(src='@/assets/curso/temas/tema3/tab1.png', alt='Biosanitarios')
      .row.tarjeta.bg-green7.p-4(titulo="Anatomopatológicos")
        .col-md-8
          h4 Anatomopatológicos
          p Son los provenientes de restos humanos, muestras para análisis, incluyendo biopsias, tejidos orgánicos amputados, partes y fluidos corporales, que se remueven durante necropsias, cirugías u otros procedimientos, tales como placentas, restos de exhumaciones entre otros. (Ministerio del Medio Ambiente, 2002, p.22)
        .col-md-4  
          figure
            img(src='@/assets/curso/temas/tema3/tab2.png', alt='Anatomopatológicos')
      .row.tarjeta.bg-green7.p-4(titulo="Cortopunzantes")
        .col-md-8
          h4 Cortopunzantes
          p Son aquellos que por sus características punzantes o cortantes pueden dar origen a un accidente percutáneo infeccioso. Dentro de éstos se encuentran: limas, lancetas, cuchillas, agujas, restos de ampolletas, pipetas, láminas de bisturí o vidrio y cualquier otro elemento que por sus características cortopunzantes pueda lesionar y ocasionar un riesgo infeccioso (Ministerio del Medio Ambiente, 2002, p.22).
        .col-md-4  
          figure
            img(src='@/assets/curso/temas/tema3/tab3.png', alt='Cortopunzantes')
      .row.tarjeta.bg-green7.p-4(titulo="De animales")
        .col-md-8
          h4 De animales
          p Son aquellos provenientes de animales de experimentación, inoculados con microorganismos patógenos y/o los provenientes de animales portadores de enfermedades infectocontagiosas (Ministerio del Medio Ambiente, 2002, p.22).
        .col-md-4  
          figure
            img(src='@/assets/curso/temas/tema3/tab4.png', alt='De animales')


    h3.t-green.mb-4(data-aos="fade") Residuos no peligrosos
    p.mb-4(data-aos="fade") Los residuos no peligrosos se clasifican en: 

    .row.align-items-center.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        figure 
          img(src='@/assets/curso/temas/tema3/img4.png', alt='')
      .col-md-7.mb-4(data-aos="fade-left")
        LineaTiempoD.linea-blue
          .row(numero="1" titulo="Biodegradables")
            p.mb-0 Son aquellos restos químicos o naturales que se descomponen fácilmente en el ambiente. En estos restos se encuentran los vegetales, residuos alimenticios no infectados, papel higiénico, papeles no aptos para reciclaje, jabones y detergentes biodegradables, madera y otros residuos que puedan ser transformados fácilmente en materia orgánica (Ministerio del Medio Ambiente, 2002, p.18).
          .row(numero="2" titulo="Reciclables")
            p.mb-0 Son aquellos que no se descomponen fácilmente y pueden volver a ser utilizados en procesos productivos como materia prima. Entre estos residuos se encuentran: algunos papeles y plásticos, chatarra, vidrio, telas, radiografías, partes y equipos obsoletos o en desuso, entre otros (Ministerio del Medio Ambiente, 2002, p.19).
          .row(numero="3" titulo="Inertes")
            p.mb-0 Son aquellos que no se descomponen ni se transforman en materia prima y su degradación natural requiere grandes períodos de tiempo. Entre estos se encuentran: el icopor, algunos tipos de papel como el papel carbón y algunos plásticos (Ministerio del Medio Ambiente, 2002, p.19).
          .row(numero="4" titulo="Ordinarios o comunes")
            p.mb-0 Son aquellos generados en el desempeño normal de las actividades. Estos residuos se generan en oficinas, pasillos, áreas comunes, cafeterías, salas de espera, auditorios y en general en todos los sitios del establecimiento del generador (Ministerio del Medio Ambiente, 2002, p.19).


    .row.fondo-gray.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-md-12
            h3.t-green.mb-4(data-aos="fade") Residuos especiales
            p.mb-5(data-aos="fade") Según el tipo, este residuo puede ser no peligroso o peligroso. Un residuo especial requiere de un manejo especial sea por su naturaleza, composición, tamaño, volumen y peso no puedan ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluye los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas, y los residuos provenientes de actividades de construcción y demás obras civiles. (Área metropolitana del Valle de Aburrá, 2016, p.8)

          .col-md-10(data-aos="fade-down")
            .titulo-sexto.color-secundario
              p.mb-0 #[b Figura 3.] Clasificación de los residuos sólidos
            figure
              img.px-md-3(src='@/assets/curso/temas/tema3/fig3.svg', alt='La imagen presenta la clasificación de residuos sólidos, la cual se divide en: No peligrosos: aprovechables y ordinarios e inertes. Peligrosos: químico y riesgo biológico.')
              figcaption.bg-white.mt-3
                p.mb-0 Nota. Clasificación de residuos sólidos, SENA (2020).




</template>

<script>
export default {
  name: 'Tema2',
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

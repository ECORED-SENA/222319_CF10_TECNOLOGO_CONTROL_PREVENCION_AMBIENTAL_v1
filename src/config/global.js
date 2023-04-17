export default {
  global: {
    componenteFormativo: 'Diagnóstico de los residuos generados',
    descripcionCurso:
      'En este componente formativo se realizará un diagnóstico de residuos con el fin de caracterizar los residuos que se generan en las actividades de la organización, su manejo actual en cuanto a recolección, almacenamiento y gestión de los residuos,  para identificar problemáticas y soluciones a estas, realizar propuesta para la adecuada minimización de residuos, aprovechamiento, tratamiento y disposición final de estos con el fin de cumplir la normativa,  en favor de un desarrollo sostenible en la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción importancia del diagnóstico de los residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clasificación y características de los residuos',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Normativa asociada a los residuos sólidos peligrosos y no peligrosos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Leyes expedidas sobre el tema de residuos sólidos y reciclaje',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Responsabilidad del generador con los residuos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Residuos especiales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cómo empezar un diagnóstico de residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Realizar el diagnóstico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Identificación de los recipientes, puntos de generación de residuos y ECOMAPA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tipos de residuos para la separación en la fuente',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Identificación de actividades de minimización de residuos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Separación en la fuente',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Rotulación',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Puntos de generación de residuos y ECOMAPA',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Caracterización y cuantificación de los residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo:
              'Metodología recomendada para el muestreo, por método de cuarteo para residuos no peligrosos',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Producción Per Cápita (PPC)',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Caracterización de residuos peligrosos media móvil',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Reconocimiento de la recolección de los residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo:
          'Reconocimiento del sitio de almacenamiento temporal y/o final de los residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Reconocimiento del manejo interno y externo de los residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Reconocimiento del manejo interno',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Recolección externa',
            hash: 't_11_2',
          },
          {
            numero: '11.3',
            titulo: ' Aprovechamiento',
            hash: 't_11_3',
          },
          {
            numero: '11.4',
            titulo: 'Tratamiento',
            hash: 't_11_4',
          },
          {
            numero: '11.5',
            titulo: 'Disposición final',
            hash: 't_11_5',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo:
          'Reconocimiento de los registros de información requeridos en la gestión de residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Informe de diagnóstico de residuos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },*/
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La isla de las flores',
      referencia:
        'Furtado, J. (2008). La isla de las flores. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TIeU7_yqrpc',
    },
    {
      tema: 'Generación y gestión de residuos',
      referencia:
        'Acciona (2018) Generación y gestión de residuos – Sostenibilidad/Acciona. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BLkOZTMRCV0&feature=youtu.be',
    },
    {
      tema: 'Proceso de caracterización de residuos sólidos',
      referencia:
        'SINTI TV (2019). Proceso de caracterización de residuos sólidos. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-a4TuCzySxY',
    },
    {
      tema: 'Matriz requisitos legales actualizada año 2020',
      referencia: '(2020) Matriz requisitos legales actualizada año 2020.',
      tipo: 'Matriz legal en Excel',
      link:
        'https://drive.google.com/drive/folders/1hs1KIN9lfQvRMnV5rqemhfUgtfaDeHdo',
    },
    {
      tema: 'Conoce la nueva resolución para separar los residuos en Colombia',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (2020) Conoce la nueva resolución para separar los residuos en Colombia. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h-j9Y_UHwxQ',
    },
    {
      tema: 'Norma técnica colombiana NTC1692',
      referencia:
        'ICONTEC (2005) Norma técnica colombiana NTC1692 Transporte de mercancías peligrosas definiciones, clasificación, marcado, etiquetado y rotulado.',
      tipo: 'Norma técnica',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC1692.pdf',
    },
    {
      tema: 'Manejo residuos sólidos',
      referencia:
        'SINTI TV (2019) Proceso de caracterización de residuos sólidos. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-a4TuCzySxY',
    },
  ],
  glosario: [
    {
      termino: 'Gestión integral de residuos sólidos',
      significado:
        'Es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final.  (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002).',
    },
    {
      termino: 'Manejo integral de residuos',
      significado:
        'Es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos. (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002).',
    },
    {
      termino: 'Residuo sólido o desecho',
      significado:
        'Es cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final. Los residuos sólidos se dividen en aprovechables y no aprovechables. Igualmente, se consideran como residuos sólidos aquellos provenientes del barrido de áreas públicas. (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002).',
    },
    {
      termino: 'Residuo peligroso',
      significado:
        'Es aquel que, por sus características infecciosas, tóxicas, explosivas, corrosivas, inflamables, volátiles, combustibles, radiactivas o reactivas puedan causar riesgo a la salud humana o deteriorar la calidad ambiental hasta niveles que causen riesgo a la salud humana. También son residuos peligrosos aquellos que sin serlo en su forma original se transforman por procesos naturales en residuos peligrosos. Así mismo, se consideran residuos peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos. (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002).',
    },
    {
      termino: 'Residuos Anatomopatológicos',
      significado:
        'Son aquellos residuos como partes del cuerpo, muestras de órganos, tejidos o líquidos humanos, generados con ocasión de la realización de necropsias, procedimientos médicos, remoción quirúrgica, análisis de patología, toma de biopsias o como resultado de la obtención de muestras biológicas para análisis químico, microbiológico, citológico o histológico. (Ministerio de salud y protección social, 2016).',
    },
    {
      termino: 'Residuos Cortopunzantes',
      significado:
        'Son aquellos que por sus características punzantes o cortantes pueden ocasionar un accidente, entre estos se encuentran: limas, lancetas, cuchillas, agujas, restos de ampolletas, pipetas, hojas de bisturí, vidrio o material de laboratorio como tubos capilares, de ensayo, tubos para toma de muestra, láminas portaobjetos y laminillas cubreobjetos, aplicadores, citocepillos, cristalería entera o rota, entre otros. (Ministerio de salud y protección social, 2016).',
    },
    {
      termino: 'Residuos o desechos radiactivos',
      significado:
        'Se entiende por residuo o desecho radiactivo aquellos que contienen radionucleidos en concentraciones o con actividades mayores que los niveles de dispensa establecidos por la autoridad reguladora o que están contaminados con ellos. (Ministerio de salud y protección social, 2016).',
    },
    {
      termino: 'Residuos no peligrosos',
      significado:
        'Son aquellos producidos por el generador en desarrollo de su actividad, que no presentan ninguna de las características de peligrosidad.',
    },
    {
      termino: 'Residuos reciclables',
      significado:
        'Son aquellos que no se descomponen fácilmente y pueden volver a ser utilizados en procesos productivos como materia prima. Entre estos residuos se encuentran: algunos papeles y plásticos, chatarra, vidrio, telas, partes y equipos obsoletos o en desuso, entre otros. (Área metropolitana del valle de aburra, 2016).',
    },
    {
      termino: 'Residuos Especiales',
      significado:
        'Son aquellos residuos que por su naturaleza, composición, tamaño, volumen y peso no puedan ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluye los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas, y los residuos provenientes de actividades de construcción y demás obras civiles. (Área metropolitana del valle de aburra, 2016).',
    },
    {
      termino: 'Reciclaje',
      significado:
        'Es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias. (Ministerio de Ambiente Vivienda y Desarrollo Territorial, 2002).',
    },
  ],
  referencias: [
    {
      referencia:
        'Área metropolitana del valle de aburra. (2016). Manual para el manejo integral de residuos sólidos en el valle de aburra.',
    },
    {
      referencia:
        'Empresa de acueducto y alcantarillado y aseo de Madrid. (2018). Plan de manejo integral de residuos sólidos y líquidos. ',
      link:
        'https://esemadrid.micolombiadigital.gov.co/sites/esemadrid/content/files/000421/21038_m-l01-plan-de-manejo-de-residuos-solidos-y-liquidos.pdf',
    },
    {
      referencia:
        'EPM. (2016) Norma para el almacenamiento de sustancias químicas y/o residuos peligrosos respel.',
      link:
        'https://www.epm.com.co/site/Portals/3/documentos/Energia/Normas%20consulta/Norma_almacenamiento_mercancias_peligrosas.pdf',
    },
    {
      referencia:
        'Hidrolab. (2018). Caracterización fisicoquímica residuos sólidos domiciliarios del municipio de Tibasosa. ',
    },
    {
      referencia:
        'ICONTEC. (2009). GTC 24- Gestión Ambiental Residuos sólidos Guía para la separación en la fuente.',
      link:
        'http://www.bogotaturismo.gov.co/sites/intranet.bogotaturismo.gov.co/files/GTC%2024%20DE%202009.pdf',
    },
    {
      referencia:
        'ICONTEC. (2005). Norma técnica colombiana NTC1692 Transporte de mercancías peligrosas definiciones, clasificación, marcado, etiquetado y rotulado.',
    },
    {
      referencia: 'IGAC. (2018). Manejo de residuos peligrosos y especiales. ',
      link:
        'http://igacnet2.igac.gov.co/intranet/UserFiles/File/procedimientos/instructivos/2018/I20604-01%2018V6%20Manejo%20de%20residuos%20pe.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Tecnología y Cambio Climático. (2007). Peligro y riesgo de los residuos. ',
      link:
        'http://www2.inecc.gob.mx/publicaciones2/libros/139/peligro_y_riesgo.html',
    },
    {
      referencia:
        'MARBE Departamento químico. (2016). Etiqueta SGA: Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos. ',
      link:
        'https://www.marbequimica.com.ar/etiqueta-sga-sistema-globalmente-armonizado-de-clasificacion-y-etiquetado-de-productos-quimicos/',
    },
    {
      referencia:
        'Minambiente. (2020). Gobierno unifica el código de colores para la separación de residuos en la fuente a nivel nacional. ',
      link:
        'https://www.minambiente.gov.co/index.php/noticias/4595-gobierno-unifica-el-codigo-de-colores-para-la-separacion-de-residuos-en-la-fuente-a-nivel-nacional',
    },
    {
      referencia:
        'Minambiente (2017). Política Nacional integral de residuos de aparatos electrónicos.',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/e-book_rae_/assets/RAEE_baja.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente Vivienda y Desarrollo Territorial. (2015). Decreto 1076.',
    },
    {
      referencia:
        'Ministerio de ambiente y recursos naturales Guatemala. (2018). Guía para elaborar estudios de caracterización de residuos sólidos comunes. Gráfico método de cuarteo de residuos sólidos. ',
      link: 'https://www.marn.gob.gt/Multimedios/13193.pdf',
    },
    {
      referencia:
        'Secretaria Distrital de Ambiente (2008). Gestión Integral de residuos peligrosos. ',
      link:
        'http://ambientebogota.gov.co/documents/10157/73753/Gesti%C3%B3n+Integral+de+Residuos+Peligrosos.pdf',
    },
    {
      referencia:
        'Universidad Pontificia Bolivariana y Área metropolitana del valle de aburra (2008). Guía para el manejo integral de residuos. ',
      link:
        'https://www.sabaneta.gov.co/files/doc_varios/Gu%C3%ADa%20para%20el%20Manejo%20Integral%20de%20Residuos-%20Subsector%20instituciones%20educativas.pdf',
    },
    {
      referencia:
        'Universidad del Norte. (2017). Residuos de construcción y demolición (RCD), una perspectiva de aprovechamiento para la ciudad de barranquilla desde su modelo de gestión.',
      link:
        'http://www.scielo.org.co/pdf/inde/v35n2/2145-9371-inde-35-02-00533.pdf',
    },
    {
      referencia:
        'Universidad Industrial de Santander. (2013). Plan de gestión Integral de Residuos.',
      link:
        'https://www.uis.edu.co/webUIS/es/gestionAmbiental/documentos/capacitaciones/Manejo%20de%20Productos%20y%20Residuos%20Quimicos.pdf',
    },
    {
      referencia:
        'Universidad Industrial de Santander. (2013). Plan de gestión Integral de Residuos.',
      link:
        'https://www.uis.edu.co/webUIS/es/gestionAmbiental/documentos/capacitaciones/Manejo%20de%20Productos%20y%20Residuos%20Quimicos.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable ecosistema de producción de RED Santander',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Evaluador y diseñador instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Zenith Chinchilla Ruedas',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Vilma Perilla',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación - Gráfica. Regional Distrito Capital.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

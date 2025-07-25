import type  { SocialProps, CardIndexProps, CertificacionesProps, Skills, proyectos, ExperienceProps, EducationProps } from '../../interfaces/interfaces';


export const socials: SocialProps[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gerardo-antonio-rodriguez-contreras-41456a267 ',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/g3rrarrd',
      icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
    }
];

export const cards: CardIndexProps[] = [
    {
      title: 'Sobre Mí',
      description: `Profesional apasionado por el análisis de datos, con una sólida habilidad para la exploración de conjuntos de datos y la extracción de información valiosa. \n
Disfruto de un ambiente colaborativo y de la tranquilidad de la reflexión individual. Mi curiosidad intelectual me impulsa a un aprendizaje continuo, dedicando mi tiempo libre al desarrollo de habilidades en la guitarra, la programación a través de videojuegos, y el seguimiento del baloncesto.
`      
    }
]

export const skills: Skills = {
    Lenguajes: [
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 50 },
    ],
    "Base de datos": [
        { name: "Oracle", level: 70 },
        { name: "MySQL", level: 70 },
        { name: "MariaDB", level: 50 },
        { name: "SQL Server", level: 40 },
    ],
    "Analista de Datos": [
        { name: "Pandas", level: 85 },
        { name: "Excel", level: 60 },
        { name: "MathPlotLib", level: 50 },
        { name: "Simpy", level: 60 },
    ]
}


/** WORK EXPERIENCE */

export const Proyectos: proyectos[] = [
  {
    title: "Pipeline de Datos y API con Caché Inteligente en Azure",
    period: "2025",
    link: "",
    description: "Desarrollé una solución integral de backend que automatiza la migración de datos, expone una API segura y optimizada, y mejora el rendimiento mediante una capa de caché inteligente. El sistema incluye monitoreo con Application Insights, autenticación con Firebase y despliegue completo en la nube con Docker y Azure. Todo fue definido como infraestructura como código con Terraform.",
    technologies: ["FastAPI (Python)", "Azure Data Factory", "Postgresql Database", "Redis Cache", "Firebase Authentication", "Docker", "Azure App Service (Linux)", "Application Insights", "Terraform"]
  },
  {
    title: "Arquitectura de Plataforma de E-commerce Escalable en Azure",
    period: "2025",
    link : "",
    description: "Diseñé e implementé una arquitectura moderna de e-commerce sobre la nube de Azure, enfocada en la escalabilidad, resiliencia y análisis de datos. El proyecto se dividió en múltiples componentes y repositorios independientes para facilitar el trabajo colaborativo entre equipos, mejorar el mantenimiento y permitir despliegues automatizados.",
    technologies: ["Azure App Service (Linux)", "Azure Storage Queues", "Azure SQL Database + Synapse (Data Warehouse)", "Azure Data Factory (ETL)", "Terraform (Infraestructura como Código)"],
  },
  {
    title: "Calculadora de varianza, desviacion media y estandar",
    period: "2025",
    link : "https://github.com/g3rrarrd/calculate",
    description: "En entornos donde se manejan grandes volúmenes de datos numéricos, entender su dispersión es crucial para evitar decisiones erróneas. Este proyecto surge como una herramienta práctica para analistas y estudiantes, permitiendo identificar rápidamente qué datos se alejan de la media. Gracias a esta calculadora, es posible tomar decisiones basadas en datos normalizados, evitando interpretaciones sesgadas y mejorando la confiabilidad de los análisis.",
    technologies: ["Python", "NumPy"],
  },
  {
    title: "Visualizador de vistas de página en determinados períodos de tiempo",
    period: "2025",
    link : "https://freecodecam-boilerplate-rc0akk70jxm.ws-us120.gitpod.io/",
    description: 
      "Las empresas necesitan comprender el comportamiento de sus usuarios para optimizar sus estrategias digitales. Este visualizador permite observar picos o caídas en visitas web a lo largo del tiempo, facilitando una lectura clara de los datos sin necesidad de revisar registros manualmente. La limpieza y organización de datos antes del análisis mejora la precisión y ayuda a detectar patrones que impulsan mejores decisiones de negocio."
    ,
    technologies: ["Python", "Pandas", "MathPlotLib", "NumPy"],
  },
  {
    title: "Plataforma de comercio electronico",
    period: "2025-Presente",
    link : "https://github.com/g3rrarrd/tienda_backend",
    description: "Con el aumento del comercio en línea, ofrecer una experiencia rápida y fluida es fundamental para retener usuarios. Este proyecto responde a la necesidad de escalar una plataforma que presentaba problemas de rendimiento bajo alta demanda. Al implementar APIs eficientes y optimizar las respuestas del sistema, se redujeron significativamente los tiempos de espera, mejorando la experiencia del usuario y la conversión de ventas.",
    technologies: ["Python", "JavaScript", "Django", "MariaDB", "Linux"],
  },
  {
    title: "Procesamiento y Limpieza de Datasets",
    period: "2025",
    link : "",
    description: "Muchos proyectos fallan no por modelos incorrectos, sino por datos sucios. Este proyecto aborda un problema común en análisis de datos: la falta de calidad y consistencia. La limpieza efectiva de datasets permite que cualquier análisis posterior sea confiable y significativo, reduciendo errores y malinterpretaciones en áreas como marketing, ciencia de datos o investigación académica.",
    technologies: ["Python", "Pandas"],
  },
  {
    title: "Implementación de APIs para Sistema de Registro ",
    period: "2025",
    link : "",
    description: "Las universidades necesitan sistemas robustos para gestionar el registro académico de miles de estudiantes. Este proyecto surge para cubrir esa necesidad, brindando APIs que automatizan y simplifican tareas como inscripción, asignación de clases y consulta de historial académico. La implementación permitió mayor agilidad administrativa y redujo errores humanos, mejorando el servicio al estudiante.",
    technologies: ["PHP", "JavaScript", "MariaDB", "JWT"],
  },
  {
    title: "Diseño de Base de Datos para Gestión de Recursos Humanos",
    period: "2024",
    link : "",
    description: "Gestionar de forma eficiente la información del personal es vital para cualquier organización. Este proyecto fue desarrollado con el objetivo de centralizar y optimizar el acceso a datos del área de Recursos Humanos, incluyendo contratos, evaluaciones y asistencia. Gracias a este sistema, se mejoró la trazabilidad y se facilitaron procesos internos clave como nómina y gestión del talento.",
    technologies: ["Oracle"],
  },
  {
    title: " APIs para Plataforma de Comercio Electrónico",
    period: "2024",
    link : "",
    description: "El comercio electrónico moderno exige sistemas flexibles y seguros para manejar operaciones como el registro de usuarios, pagos y gestión de inventario. Este proyecto permitió construir una base sólida de APIs para una tienda en línea, agilizando el desarrollo frontend y facilitando la integración con servicios externos. Respondió a la necesidad de un backend mantenible, escalable y orientado a microservicios.",
    technologies: ["Java", "SpringBoot", "MySQL", "JavaScript", "JWT"],
  },
  {
    title: "Desarrollo de API y Gestión de Bases de Datos para Proyecto Estilo Spotify",
    period: "2023",
    link : "",
    description: "La experiencia del usuario en plataformas de streaming depende de una respuesta rápida y un manejo eficiente del catálogo de contenido. Este proyecto emuló funcionalidades esenciales de una plataforma como Spotify, abordando retos como el diseño de consultas optimizadas y estructuras de datos adecuadas. Fue fundamental para demostrar la capacidad de construir sistemas escalables y orientados a contenidos dinámicos.",
    technologies: ["Java", "SpringBoot", "Oracle", "Linux", "JavaScript"],
  }
];

export const experience : ExperienceProps[] = [
  {
    title: "Experiencia laboral",
    experience: "Actualmente, he adquirido experiencia significativa a través del desarrollo de software, APIs, diseño y optimización de bases de datos, y manipulación de datos en diversos proyectos académicos universitarios. Estas experiencias han consolidado mis habilidades en el ciclo completo de desarrollo de aplicaciones y en la gestión de datos",
  },
]

export const education: EducationProps[] = [
  {
    title: "Ingenieria en sistemas",
    place: "Universidad Nacional Autonoma de Honduras",
    period: "2020-Presente"
  }
]

export const certificaciones : CertificacionesProps[] = [
  {
    title: "Ingenieria de datos",
    period: "2025-Presente"
  },
  {
    title: "Ingles B1",
    period: "2025-Presente"
  },
  {
    title: "Analista de datos",
    period: "jul-2025"
  },
  {
    title: "Base relacionales",
    period: "jul-2025"
  },
  {
    title: "Python 1 y 2",
    period: "oct-2023"
  },
  {
    title: "Principios de ciberseguridad",
    period: "ene-2023"
  },
  {
    title: "Redes 1 y 2",
    period: "sep-2022"
  },
];
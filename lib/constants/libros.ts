export type Libro = {
  slug: string;
  titulo: string;
  subtitulo?: string;
  ano: string;
  editorial: string;
  sinopsis: string;
  cuerpo: string[];
  tapa?: string;
  color?: string;
  link?: string;
  badges?: string[];
  proximo?: boolean;
  destacado?: boolean;
  paginas?: number;
  isbn?: string;
};

export const libros: Libro[] = [
  {
    slug: "business-therapy",
    titulo: "Business Therapy",
    subtitulo: "El método para liderar hacia mejores resultados",
    ano: "2010",
    editorial: "Aguilar · Grupo Santillana",
    sinopsis: "La obra fundacional. El libro que abrió un método propio para liderar hacia mejores resultados desde la psicología clínica aplicada al universo laboral.",
    cuerpo: [
      "Business Therapy es el libro que da nombre al método. Andrea Churba reúne aquí, por primera vez en formato libro, el enfoque que venía desarrollando con líderes y equipos durante años.",
      "El planteo central: las organizaciones no cambian por arriba. Cambian cuando las personas que las habitan cambian. Y para que eso pase, hay un trabajo psicológico —no motivacional— que es ineludible.",
      "Mezcla teoría, casos reales y herramientas prácticas. Es el primer libro publicado por una editorial mayor (Aguilar / Grupo Santillana) en una serie que sumaría tres títulos más en los años siguientes.",
    ],
    tapa: "/images/libros/business-therapy.jpg",
    link: "https://www.cuspide.com/9789870414414/Business+Therapy",
    badges: ["1er libro", "Aguilar Santillana"],
  },
  {
    slug: "lidera-tu-propio-cambio",
    titulo: "Lidera tu propio cambio",
    subtitulo: "Un modelo para el cambio profundo y simultáneo de los individuos y la cultura de las organizaciones",
    ano: "2017",
    editorial: "Ediciones Granica",
    sinopsis: "Siete patrones de percepción para entender cómo nos vemos, cómo nos paramos y cómo nos transformamos en el trabajo.",
    cuerpo: [
      "Después de Business Therapy, este libro profundiza en una idea central del método: el patrón de percepción. La forma en que cada persona mira el trabajo, las relaciones y los problemas no es neutral. Es un hábito instalado.",
      "El libro propone siete patrones de percepción —entre ellos el patrón bombero versus el patrón sistémico— y trabaja sobre cómo flexibilizarlos. No para reemplazar uno por otro, sino para tener más herramientas mentales disponibles según lo que la situación pida.",
      "Es probablemente el libro más herramental de Andrea. Cada capítulo termina con ejercicios concretos para aplicar. Muchos clientes lo leen antes de empezar un proceso individual.",
    ],
    tapa: "/images/libros/lidera.jpg",
    link: "https://www.amazon.com/Lidera-propio-cambio-Sim%C3%BAltaneo-Organizaciones/dp/950641906X",
    badges: ["7 patrones", "Granica"],
    destacado: true,
  },
  {
    slug: "recursos-y-herramientas",
    titulo: "Recursos y Herramientas",
    subtitulo: "Caja de herramientas para procesos de cambio",
    ano: "2017",
    editorial: "Editorial Business Therapy",
    sinopsis: "Caja de herramientas prácticas para acompañar procesos de cambio personales y de equipo.",
    cuerpo: [
      "Un libro práctico, publicado en paralelo a Lidera tu propio cambio. Funciona como complemento: si el primero traza el mapa conceptual, este es el kit de herramientas para aplicar en el día a día.",
      "Pensado especialmente para facilitadores, líderes de equipo y consultores que acompañan procesos de cambio en otros. Incluye plantillas, dinámicas y guías de conversación.",
      "Editado por Business Therapy, no en circulación masiva. Disponible para clientes y participantes de programas.",
    ],
    color: "bg-violet",
    badges: ["Herramientas"],
  },
  {
    slug: "diez-habilidades",
    titulo: "Diez habilidades que llegaron para quedarse",
    subtitulo: "Lo que aprendimos en la cuarentena",
    ano: "2020",
    editorial: "Ebook · Editorial Business Therapy",
    sinopsis: "Lo que aprendimos en la cuarentena. Las habilidades que se volvieron inevitables.",
    cuerpo: [
      "Escrito durante 2020 en medio de la pandemia, este ebook captura un momento muy específico: el de las habilidades que se volvieron centrales cuando el contexto cambió de un día para el otro.",
      "Habilidades como sostener la incertidumbre, comunicar en remoto con honestidad, decidir con información incompleta y cuidar el cansancio del equipo. Todas estuvieron siempre, pero ese año se volvieron condición de supervivencia.",
      "Es el primer libro de Andrea en formato digital, publicado bajo su propia editorial. Pensado como respuesta rápida a una época que pedía respuesta rápida.",
    ],
    tapa: "/images/libros/cuarentena.jpg",
    badges: ["Ebook", "Pandemia"],
  },
  {
    slug: "liderar-los-cambios",
    titulo: "Liderar los cambios",
    subtitulo: "Próximo libro · 2026",
    ano: "2026",
    editorial: "En escritura",
    sinopsis: "La contraparte de Lidera tu propio cambio: cómo se conduce el cambio en otros, en equipos, en culturas enteras.",
    cuerpo: [
      "El próximo libro de Andrea Churba, actualmente en escritura. Es la contraparte de Lidera tu propio cambio. Si aquel trataba sobre cómo trabajar el propio relato y los propios patrones, este aborda la otra cara: cómo se conduce el cambio en otras personas, en equipos, en culturas organizacionales enteras.",
      "Tema central: una vez que vos ya hiciste tu trabajo interno, ¿cómo acompañás a otros en el suyo? ¿Cómo lo facilitás sin imponerlo? ¿Cómo sostenés el proceso cuando hay resistencia? ¿Qué hacés cuando alguien clave del equipo no quiere acompañar?",
      "Sale en 2026. Suscribite al newsletter para enterarte cuando esté disponible.",
    ],
    color: "bg-ink",
    badges: ["2026"],
    proximo: true,
  },
];

export function getLibroBySlug(slug: string): Libro | undefined {
  return libros.find((l) => l.slug === slug);
}

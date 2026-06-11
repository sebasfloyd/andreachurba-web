export type Libro = {
  titulo: string;
  subtitulo?: string;
  ano: number | string;
  editorial: string;
  sinopsis: string;
  tapa: string;
  link: string;
  proximo?: boolean;
};

export const libros: Libro[] = [
  {
    titulo: "Business Therapy",
    subtitulo: "El método para liderar hacia mejores resultados",
    ano: 2009,
    editorial: "Aguilar · Grupo Santillana",
    sinopsis:
      "El libro que abrió un método propio: trabajar las dimensiones humanas del trabajo para que el negocio funcione.",
    tapa: "/images/libros/business-therapy.jpg",
    link: "https://www.penguinlibros.com/ar/46614-andrea-churba",
  },
  {
    titulo: "Lidera tu propio cambio",
    ano: 2017,
    editorial: "Granica",
    sinopsis:
      "Siete patrones de percepción para entender cómo nos vemos, cómo nos paramos y cómo nos transformamos en el trabajo.",
    tapa: "/images/libros/lidera-tu-propio-cambio.jpg",
    link: "https://www.amazon.com/Lidera-propio-cambio-Sim%C3%BAltaneo-Organizaciones/dp/950641906X",
  },
  {
    titulo: "Recursos y Herramientas",
    ano: 2017,
    editorial: "Business Therapy",
    sinopsis:
      "Caja de herramientas prácticas para acompañar procesos de cambio personal y de equipo.",
    tapa: "/images/libros/recursos-y-herramientas.jpg",
    link: "#",
  },
  {
    titulo: "Lo que aprendimos en la cuarentena",
    subtitulo: "Diez habilidades que llegaron para quedarse",
    ano: 2020,
    editorial: "Business Therapy · ebook",
    sinopsis:
      "Una lectura corta sobre las capacidades que la pandemia volvió evidentes y que ahora son inevitables.",
    tapa: "/images/libros/cuarentena.jpg",
    link: "#",
  },
  {
    titulo: "Liderar los cambios",
    ano: "En escritura · 2026",
    editorial: "Próximo libro",
    sinopsis:
      "La contraparte de Lidera tu propio cambio: cómo se conduce el cambio en otros, en equipos, en culturas enteras.",
    tapa: "",
    link: "",
    proximo: true,
  },
];

export type Voluntariado = {
  nombre: string;
  descripcion: string;
  url?: string;
};

export const tukuy = {
  nombre: "Experiencia Tukuy",
  bajada:
    "Co-fundé Tukuy junto a otras tres consultoras. Una alianza para acompañar procesos donde lo organizacional y lo social se encuentran. De ahí salió, también, un libro escrito a varias manos.",
  url: "#",
};

export const voluntariados: Voluntariado[] = [
  {
    nombre: "Red Solidaria",
    descripcion: "Voluntariado en proyectos de articulación y acompañamiento.",
  },
  {
    nombre: "Lamroth Hakol",
    descripcion: "Workshops y formación para procesos comunitarios.",
  },
  {
    nombre: "Haciendo Caminos",
    descripcion: "Acompañamiento a equipos que trabajan en territorio.",
  },
  {
    nombre: "Agencia I",
    descripcion: "Agencia de Innovación Social: uniones entre personas y proyectos.",
  },
  {
    nombre: "Primera experiencia laboral",
    descripcion:
      "Acompaño a mujeres en situación de vulnerabilidad que están encontrando su primer trabajo. Procesos de coaching individual sostenidos en el tiempo.",
  },
];

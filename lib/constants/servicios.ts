export type Servicio = {
  titulo: string;
  bajada: string;
  bullets: string[];
};

export const servicios: Servicio[] = [
  {
    titulo: "Procesos de cambio cultural",
    bajada:
      "Acompaño a equipos directivos y áreas en transformaciones de mediano y largo plazo. Voy a fondo: diagnóstico, intervención y sostenibilidad.",
    bullets: [
      "Diagnóstico cultural",
      "Diseño de la intervención",
      "Facilitación de espacios de trabajo",
      "Medición y sostenibilidad",
    ],
  },
  {
    titulo: "Coaching de líderes",
    bajada:
      "Trabajo uno a uno con personas en puntos de inflexión: nuevos roles, escalas distintas, decisiones de carrera, transiciones difíciles.",
    bullets: [
      "Procesos de 3 a 9 meses",
      "Sesiones quincenales",
      "Trabajo sobre el relato identitario",
      "Foco en cambios sostenibles",
    ],
  },
  {
    titulo: "Charlas y workshops",
    bajada:
      "Keynotes para eventos corporativos, jornadas y escuelas de negocio. Para equipos que quieren pensar el cambio desde otro lugar.",
    bullets: [
      "Identidad y relato",
      "Liderazgo en contextos de cambio",
      "Cultura organizacional",
      "Workshops in-company a medida",
    ],
  },
];

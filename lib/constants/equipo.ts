export type Miembro = {
  nombre: string;
  rol: string;
  bio: string;
  foto: string;
};

export const equipo: Miembro[] = [
  {
    nombre: "Andrea Churba",
    rol: "Fundadora y directora",
    bio: "Psicóloga. Creadora del modelo Business Therapy para el crecimiento y el cambio de las personas y la cultura de las organizaciones. Hasta 2003 fue coordinadora general de la División Empresas y Negocios de la Escuela Argentina de PNL y Coaching. Autora de cuatro libros y uno en escritura.",
    foto: "/images/andrea/andrea-bw.jpg",
  },
  {
    nombre: "Julieta Gálvez",
    rol: "Instructora Senior",
    bio: "Licenciada en Psicología con formación de posgrado en Conducción Estratégica de Recursos Humanos y Terapia Cognitiva. Lideró proyectos de cambio organizacional en EMC/Dell, Techint, COGA y AA2000.",
    foto: "/images/equipo/julieta-galvez.jpg",
  },
  {
    nombre: "Verónica Rodríguez",
    rol: "Logística de proyectos",
    bio: "Responsable de la logística de los proyectos de BT y de la producción de materiales, presentaciones e informes. Diseña e implementa el software de seguimiento de proyectos.",
    foto: "/images/equipo/veronica-rodriguez.jpg",
  },
  {
    nombre: "Silvina Romero",
    rol: "Administración",
    bio: "Responsable de la gestión administrativa de BT. En la comunicación con los clientes es la referente para cuestiones de presupuestos y cobranzas.",
    foto: "/images/equipo/silvina-romero.jpg",
  },
];

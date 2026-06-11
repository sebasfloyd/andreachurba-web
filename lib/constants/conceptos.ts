export type Concepto = {
  titulo: string;
  bajada: string;
  numero: string;
};

export const conceptos: Concepto[] = [
  {
    numero: "01",
    titulo: "Relato identitario",
    bajada:
      "Lo que decimos de nosotros mismos no es la verdad. Es un relato. Y los narradores somos nosotros, por eso tenemos el poder de modificarlo.",
  },
  {
    numero: "02",
    titulo: "Patrón de percepción",
    bajada:
      "Hay quienes apagan incendios y hay quienes ven el sistema. La diferencia no es talento: es hábito. Y los hábitos de percepción se entrenan.",
  },
  {
    numero: "03",
    titulo: "Delay",
    bajada:
      "El contexto cambia y nosotros seguimos contándonos lo de antes. El cambio empieza cuando se cierra ese desfasaje entre el presente y el relato.",
  },
  {
    numero: "04",
    titulo: "Liderar el propio cambio",
    bajada:
      "Antes de liderar a otros, hay un trabajo íntimo que es indelegable. Ese trabajo lo tenés que hacer vos, con vos.",
  },
];

export type Columna = {
  medio: "Infobae" | "La Nación" | "Ohlalá";
  titulo: string;
  bajada: string;
  cuerpo: string[];
  url: string;
  fecha?: string;
};

export const columnas: Columna[] = [
  {
    medio: "Infobae",
    titulo: "Basta de ser bomberos en el trabajo",
    bajada: "Vivimos apagando incendios. Resolviendo lo urgente. Reaccionando. Hay otra forma de pararse frente al trabajo, y empieza por entender el patrón de percepción con el que mirás.",
    cuerpo: [
      "Hay dos formas básicas de mirar el trabajo: la mirada bomberil y la mirada sistémica. El bombero ve incendios. Apaga uno, aparece otro. La eficiencia se mide en velocidad de resolución. El líder con mirada sistémica, en cambio, ve patrones. Se pregunta por qué se incendia. Trabaja sobre las causas.",
      "El problema no es ser bombero. El problema es ser bombero cuando el contexto ya no lo pide. Hubo un tiempo en que esa mirada te sirvió. Resolviste, salvaste situaciones, te ganaste un lugar. Pero el rol cambió. Tu equipo creció. Las decisiones se volvieron más estratégicas. Y vos seguís corriendo entre llamas.",
      "Liderar el propio cambio empieza por darse cuenta de ese patrón. De qué se trata el hábito de percepción con el que mirás. Y empezar a flexibilizarlo. Aprender a soltar la urgencia, sostener la incomodidad de no resolver todo al instante. Ver el sistema, no solo el síntoma.",
      "Es un trabajo profundo. Lleva tiempo. Necesita acompañamiento. Pero del otro lado está la posibilidad de liderar diferente. De estar presente sin ser imprescindible. De que tu equipo crezca con vos al lado, no apagándole los incendios.",
    ],
    url: "https://www.infobae.com/autor/andrea-churba/",
    fecha: "2024",
  },
  {
    medio: "La Nación",
    titulo: "Toma de decisiones: el falso dilema entre velocidad y calidad",
    bajada: "Decidimos rápido o decidimos bien. Ese es el dilema falso que nos venden. La verdad es que decidimos según el patrón que tenemos instalado. Y los patrones se pueden cambiar.",
    cuerpo: [
      "En las organizaciones, una de las dudas más frecuentes que escucho de líderes es esta: ¿decido rápido o decido bien? La pregunta esconde un supuesto. Que velocidad y calidad están en tensión. Que tenés que elegir.",
      "Mi experiencia es que la velocidad no es lo opuesto a la calidad. Lo opuesto a la calidad es la falta de claridad sobre lo que estás decidiendo. Por qué lo estás decidiendo. Y desde dónde lo estás haciendo.",
      "Hay decisiones que necesitan velocidad porque la ventana de oportunidad es chica. Hay otras que necesitan reposo porque las consecuencias son irreversibles. Saber diferenciar una de otra es una competencia que se entrena.",
      "El líder que se queda atrapado en el dilema termina o decidiendo todo rápido y mal, o sin decidir nada postergando lo importante. Ambos extremos son trampas del mismo patrón: no haber distinguido qué decisión es cada cosa.",
    ],
    url: "https://www.lanacion.com.ar/autor/andrea-churba/",
    fecha: "2024",
  },
  {
    medio: "Ohlalá",
    titulo: "Cuando lo que antes funcionaba ya no alcanza",
    bajada: "Te pasa: usás las mismas herramientas, las mismas estrategias, el mismo discurso. Y los resultados ya no son los mismos. No es que vos cambiaste. Es que el contexto cambió.",
    cuerpo: [
      "Es uno de los momentos más incómodos de cualquier carrera. Algo que te funcionó durante años deja de funcionar. Y no entendés qué pasó. Si vos no cambiaste, ¿por qué los resultados sí?",
      "La respuesta es simple y compleja al mismo tiempo. El contexto cambió. La gente con la que trabajás cambió. Las expectativas cambiaron. Tu rol probablemente cambió, aunque vos no te diste cuenta. Y vos seguís usando el mismo set de herramientas.",
      "El delay es ese desfasaje entre lo que el contexto pide y lo que vos seguís contándote sobre cómo se hacen las cosas. Vivimos con ese delay todo el tiempo. La diferencia entre quienes lo cierran y quienes no, es la conciencia.",
      "Darte cuenta es el primer paso. Soltar el ego que te dice que vos sabés es el segundo. Animarte a pedir ayuda, a leer, a estudiar, a acompañarte con alguien que te mire desde afuera es el tercero. Y empezar a probar nuevas formas, incluso a riesgo de no salir perfecto, es el cuarto.",
    ],
    url: "https://www.ohlala.com/autor/andrea-churba/",
    fecha: "2024",
  },
  {
    medio: "Infobae",
    titulo: "El relato identitario: la historia que nos contamos",
    bajada: "Lo que decimos de nosotros mismos no es la verdad. Es un relato. Y los narradores somos nosotros. Por eso tenemos el poder de modificarlo.",
    cuerpo: [
      "Una de las dinámicas que más me sorprende en mi trabajo es ver cómo personas brillantes, exitosas, líderes capaces, se sabotean con la historia que se cuentan sobre sí mismas. Yo no sé delegar. Yo soy desorganizada. Yo no estoy hecha para hablar en público. Yo no negocio bien.",
      "Esa narrativa es lo que llamo relato identitario. Y tiene dos características que vale la pena conocer. Primera: en algún momento fue cierta. Lo que te decís sobre vos generalmente refleja un momento de tu pasado en el que efectivamente eras así. Segunda: probablemente ya no es cierta. Pero seguís contándotela.",
      "El problema es que el lenguaje crea realidad. Si te decís que no sabés delegar, vas a percibir solo las situaciones en las que delegás mal. Vas a ignorar las veces que delegaste bien. Y vas a generar más oportunidades de confirmar que vos no sabés.",
      "El trabajo es reescribir. Y empieza por agregarle palabras de temporalidad. Yo todavía no domino la delegación. Yo en este momento estoy aprendiendo a hablar en público. Yo aún no negocio con la firmeza que quisiera. Esas tres palabras abren la posibilidad de que mañana sea distinto.",
    ],
    url: "https://www.infobae.com/autor/andrea-churba/",
    fecha: "2023",
  },
  {
    medio: "La Nación",
    titulo: "Liderar emociones: las propias y las ajenas",
    bajada: "Si gestionás equipos en proceso de cambio, vas a tener que aprender a leer emociones. No solo las tuyas. También las que el cambio dispara en quienes te rodean.",
    cuerpo: [
      "Toda transformación organizacional genera emociones. Miedo, resistencia, esperanza, entusiasmo, tristeza por lo que se pierde. Y como líder, tu trabajo no es ignorarlas ni controlarlas. Es nombrarlas, validarlas, y dar espacio para que sean.",
      "Lo primero es trabajar con las tuyas. Cualquier proceso de cambio que conduzcas te va a movilizar internamente. Si no podés reconocer eso en vos mismo, no vas a poder hacerlo con tu equipo.",
      "Lo segundo es desarrollar la capacidad de leer las emociones colectivas. Qué pasa en la sala cuando comunicás un cambio. Qué se dice y qué no se dice. Qué cuerpos están tensos, qué miradas evitan. Esa lectura es información valiosa para ajustar la conducción del proceso.",
      "Liderar emociones no es manipular. Es reconocer que las personas no somos máquinas de tareas. Tenemos historia. Tenemos miedo. Tenemos esperanzas. Y un proceso de cambio bien conducido las contempla, no las pasa por arriba.",
    ],
    url: "https://www.lanacion.com.ar/autor/andrea-churba/",
    fecha: "2023",
  },
  {
    medio: "Ohlalá",
    titulo: "Cómo cuidar tus vacaciones de las interrupciones del trabajo",
    bajada: "Te tomás vacaciones pero te llaman, te escriben, te consultan. Vos contestás. Y al volver, sentís que no descansaste. La buena noticia: se puede aprender a poner límites.",
    cuerpo: [
      "Diciembre es el mes en el que más recibo consultas sobre el tema. Cómo me tomo vacaciones de verdad. Cómo dejo de contestar. Cómo no pienso en el trabajo cuando estoy con mi familia. La respuesta corta es que se puede. La respuesta larga implica entender qué pasa adentro tuyo cuando suena el teléfono.",
      "Hay tres razones típicas por las que no soltamos en vacaciones. Una: ego. Pensamos que sin nosotros no funciona. Dos: ansiedad. Necesitamos sentir que estamos al control. Tres: hábito. Estamos tan acostumbrados a responder rápido que no sabemos no hacerlo.",
      "Cualquiera sea la razón, el ejercicio es el mismo. Comunicar antes que te vas. Decir hasta cuándo. Delegar concretamente qué cosas decide cada persona. Y, lo más difícil, aguantarte la ansiedad de no estar.",
      "Cada vez que digamos un sí a contestar un mail en vacaciones, le estamos diciendo un no a un momento con quienes elegimos pasar esos días. Las decisiones son siempre de a dos. Cada sí es un no.",
    ],
    url: "https://www.ohlala.com/autor/andrea-churba/",
    fecha: "2023",
  },
];

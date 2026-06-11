export type Conferencia = {
  titulo: string;
  evento: string;
  ano: number;
  duracion?: string;
  videoId: string;
  url: string;
  destacada?: boolean;
  thumbnail?: string;
};

export const conferenciaDestacada: Conferencia = {
  titulo: "Identidad y Relato: «Había una vez yo»",
  evento: "TEDxBarrioSanNicolas",
  ano: 2022,
  duracion: "12 min",
  videoId: "WHAibWX22mw",
  url: "https://www.youtube.com/watch?v=WHAibWX22mw",
  destacada: true,
  thumbnail: "https://i.ytimg.com/vi/WHAibWX22mw/maxresdefault.jpg",
};

export const conferencias: Conferencia[] = [
  {
    titulo: "Lidera tu propio cambio",
    evento: "NEXXO en vivo · Programa 23",
    ano: 2025,
    videoId: "B2oudjMoTVE",
    url: "https://www.youtube.com/watch?v=B2oudjMoTVE",
    thumbnail: "https://i.ytimg.com/vi/B2oudjMoTVE/hqdefault.jpg",
  },
  {
    titulo: "Unicornios",
    evento: "TEDxBarrioSanNicolas",
    ano: 2022,
    videoId: "",
    url: "http://www.andreachurba.com.ar/en-que-andamos-3/tedxbarriosannicolas-unicornios/",
  },
  {
    titulo: "Jornada Anual de Equipos",
    evento: "BBVA Argentina · #JAE2021",
    ano: 2021,
    videoId: "",
    url: "#",
  },
  {
    titulo: "Quedarse con la resistencia al cambio, enferma",
    evento: "Entrevista",
    ano: 2020,
    videoId: "1AcjNFdK2XE",
    url: "https://www.youtube.com/watch?v=1AcjNFdK2XE",
    thumbnail: "https://i.ytimg.com/vi/1AcjNFdK2XE/hqdefault.jpg",
  },
  {
    titulo: "CEO Leadership Summit",
    evento: "Con Patricio Fedio",
    ano: 2020,
    videoId: "OmnOdXRsy9k",
    url: "https://www.youtube.com/watch?v=OmnOdXRsy9k",
    thumbnail: "https://i.ytimg.com/vi/OmnOdXRsy9k/hqdefault.jpg",
  },
  {
    titulo: "Ohlalá Santander Maker",
    evento: "Encuentro de emprendedoras",
    ano: 2019,
    videoId: "uUThe53ke2k",
    url: "https://www.youtube.com/watch?v=uUThe53ke2k",
    thumbnail: "https://i.ytimg.com/vi/uUThe53ke2k/hqdefault.jpg",
  },
];

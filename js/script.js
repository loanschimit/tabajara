import Slide from "./modules/slide.js";

import ScrollAnima from "./modules/scroll-anima.js";

import InitDateObject from "./modules/cronometro.js";

const cronometro = new InitDateObject(".horas", ".minutos", ".segundos");
cronometro.init();

const slide = new Slide(".queima-produtos", ".produtos-section");
slide.init();
const slide2 = new Slide(".queima-produtos2", ".produtos-section2");
slide2.init();

const scrollAnima = new ScrollAnima(
  "[data-tab='scroll']",
  window.innerHeight * 0.6,
  "ativo"
);
scrollAnima.init();

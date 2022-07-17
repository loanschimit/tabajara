import Slide from "./modules/slide.js";

import ScrollAnima from "./modules/scroll-anima.js";

const slide = new Slide(".queima-produtos", ".produtos-section");
slide.init();

const scrollAnima = new ScrollAnima(
  "[data-tab='scroll']",
  window.innerHeight * 0.6,
  "ativo"
);
scrollAnima.init();

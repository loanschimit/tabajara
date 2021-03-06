import Slide from "./modules/slide.js";

import InitModal from "./modules/modal.js";

import ScrollSuave from "./modules/scroll-suave.js";

import ScrollAnima from "./modules/scroll-anima.js";

import InitDateObject from "./modules/cronometro.js";

import ScrollTeste from "./modules/scroll-teste.js";

import InitTooltip from "./modules/tooltip.js";

import RegExpPesquisa from "./modules/pesquisa-regexp.js";

import ItemFetch from "./modules/itensJSON.js";
const itensFetch = new ItemFetch("[data-item]")
itensFetch.init()

const regexpPesquisa = new RegExpPesquisa("pesquisarProdutos");
regexpPesquisa.init();


const modal = new InitModal(".login", ".fechar", ".body-modal");
modal.init();

const cadastrese = new InitModal(
  ".tela-cadastrar",
  ".fechar",
  ".body-cadastre-se"
);
cadastrese.init();

const carrinho = new InitModal(
  ".abrir-carrinho",
  ".fechar-carrinho",
  ".body-carrinho"
);
carrinho.init();

const scrollSuave = new ScrollSuave("a[href^='#']");
scrollSuave.init();

const cronometro = new InitDateObject(".horas", ".minutos", ".segundos");
cronometro.init();

// const slideTeste = new ScrollTeste(".queima-produtos", ".produtos-section");
// slideTeste.init();

const initTooltip = new InitTooltip("#tooltip");
initTooltip.init();

const slideTeste2 = new ScrollTeste(".queima-produtos2", ".produtos-section2");
slideTeste2.init();

const slide = new Slide(".queima-produtos", ".produtos-section");
slide.init();

// const slide2 = new Slide(".queima-produtos2", ".produtos-section2");
// slide2.init();

const scrollAnima = new ScrollAnima(
  "[data-tab='scroll']",
  window.innerHeight * 0.6,
  "ativo"
);
scrollAnima.init();

import debounce from "./debounce-scroll.js";

export default class ScrollTeste {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.tamanho = length - 1;
  }

  teste() {
    this.wrapper.onscroll = logScroll;

    function logScroll(e) {
      console.log(`Posição do scroll: ${e.target.scrollTop}`);
    }
  }
  init() {
    this.teste();
    // this.addEventos();
  }
}

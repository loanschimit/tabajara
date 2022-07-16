import debounce from "./debounce-scroll.js";

export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.tamanho = length - 1;
    this.distancia = {
      inicial: 0,
      final: 0,
      movimento: 0,
    };
    console.log(this.slide.getBoundingClientRect().x);
    console.log(this.wrapper.getBoundingClientRect().x);
  }

  loopArray() {
    const slideArray = [...this.slide.children].map((element) => {
      return element;
    });
    return slideArray;
  }

  transition(active) {
    this.slide.style.transition = active ? ".3s" : "";
  }
  // novoMetodo() {
  // referencia https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onscroll

  moveSlide(distX) {
    this.loopArray();
    console.log(this.slide.getBoundingClientRect().right);
    console.log(this.wrapper.getBoundingClientRect().right);
    this.distancia.movePosition = distX; // novo objeto salvo o valor de distX
    if (
      this.loopArray()[0].getBoundingClientRect().x <=
        this.wrapper.getBoundingClientRect().x + 40 &&
      !(
        this.loopArray()[4].getBoundingClientRect().x <=
        this.wrapper.getBoundingClientRect().right - 355
      )
    ) {
      this.transition(false);
      this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
    } else if (
      this.loopArray()[4].getBoundingClientRect().x <=
      this.wrapper.getBoundingClientRect().right - 355
    ) {
      setTimeout(() => {
        this.transition(true);
        this.slide.style.transform = `translate3d(-${
          this.wrapper.getBoundingClientRect().right -
          this.slide.getBoundingClientRect().right * 1.02
        }px, 0, 0)`;
        this.distancia.final = -(
          this.wrapper.getBoundingClientRect().right -
          this.slide.getBoundingClientRect().right * 1.02
        );
      }, 400);
    } else {
      setTimeout(() => {
        this.transition(true);
        this.slide.style.transform = `initial`;
        this.distancia.final = this.wrapper.getBoundingClientRect().x;
      }, 400);
    }
  }

  updatePosition(clientX) {
    // o clientX é o event.clientX
    this.distancia.movimento = this.distancia.inicial - clientX;
    return this.distancia.final - this.distancia.movimento;
  }

  onStart(event) {
    event.preventDefault();
    this.distancia.inicial = event.clientX;
    this.wrapper.addEventListener("mousemove", this.onMove);
    // console.log(this.slide.getBoundingClientRect().x)
  }

  onMove(event) {
    const finalPosition = this.updatePosition(event.clientX);
    this.moveSlide(finalPosition);
  }

  onEnd() {
    // console.log(this.wrapper.getBoundingClientRect().x)
    this.wrapper.removeEventListener("mousemove", this.onMove);
    this.distancia.final = this.distancia.movePosition;
  }

  addEventos() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEventos() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEventos();
    this.addEventos();
  }
}
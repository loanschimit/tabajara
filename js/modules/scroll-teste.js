import debounce from "./debounce-scroll.js";

export default class ScrollTeste {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.tamanho = length - 1;
  }

  dontMoveY(event) {
    // const href = event.currentTarget.getAttribute("href");
    if (event.target.id === "dont-scrollY") {
      document.body.style.overflowY = "hidden";
      document.body.style.marginRight = "1.063rem";
    } else {
      document.body.style.marginRight = "0px";
      document.body.style.overflowY = "scroll";
    }
    // this.wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  teste(item) {
    this.slide.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) {
        item.scrollLeft += 100;
      } else {
        item.scrollLeft -= 100;
      }
    });
    window.addEventListener("mouseover", this.dontMoveY);
  }
  bindElement() {
    this.dontMoveY = this.dontMoveY.bind(this);
  }
  init() {
    this.teste(this.wrapper);
    this.bindElement();
    // this.addEventos();
  }
}

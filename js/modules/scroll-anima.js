import debounce from "./debounce-scroll.js";

export default class ScrollAnima {
  /* ↓ selecionou o objeto ↓ */
  constructor(sections, windowDistancia, active) {
    this.sections = document.querySelectorAll(sections);
    /* ↓ calculo para pre-determinar um posicionamento ↓ */
    this.windowDistancia = windowDistancia;
    this.active = active;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // pega a distancia através de cada um item de sections relacionado ao topo da pagina e retorna
  getDistance() {
    this.distance = [...this.sections].map((itens) => {
      const distanciaDoTopo = itens.offsetTop;
      return {
        element: itens,
        offset: Math.floor(distanciaDoTopo - this.windowDistancia),
      };
    });
  }

  // verifica a distancia de cada objeto e adiciona classe quando eles devem aparecer
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.active);
      } else if (item.element.classList.contains(this.active)) {
        item.element.classList.remove(this.active);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      /* ↓ ativa função ↓ */
      /* ↓ determina que a função de cima ocorrerá atraves de scroll ↓ */
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // remove o evento de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}

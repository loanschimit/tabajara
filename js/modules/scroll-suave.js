export default class ScrollSuave {
  /* ↓ seleciona os itens que começam com o href "#" ↓ */
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");

    const section = document.querySelector(href);
    if (event.currentTarget.hasAttribute("href"))
      section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    /* ↓ cria um evento de clique e uma função ↓ */
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) this.addLinkEvent();
    return this;
  }
}

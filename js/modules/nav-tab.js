export default class TabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabcontent = document.querySelectorAll(content);
    this.active = "ativo";
  }

  activeTab(index) {
    const direcao = this.tabcontent[index].dataset.anime;
    this.tabcontent.forEach((section) => {
      section.scrollTop = 0;
      section.classList.remove(this.active, direcao);
    });
    this.tabmenu.forEach((menu) => {
      menu.classList.remove(this.active);
    });

    this.tabcontent[index].classList.add(this.active, direcao);
    this.tabmenu[index].classList.add(this.active);
  }

  addEventTab() {
    /* ↓ adiciona a classe ao item para ser o padrão ↓ */
    this.tabcontent[0].classList.add(this.active);
    this.tabmenu[0].classList.add(this.active);

    /* ↓ seleciona o item da foto que for clicada e transfere o index ↓ */
    this.tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addEventTab();
    }
    return this;
  }
}

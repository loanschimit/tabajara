/* eslint-disable quotes */
export default class InitModal {
  constructor(open, close, section) {
    this.loginBotao = document.querySelector(open);
    this.fecharBotao = document.querySelector(close);
    this.sectionLogin = document.querySelector(section);
    // bind(this) tras ao callback para fazer referência ao obj da class(InitModal)
    this.btnToggleModal = this.btnToggleModal.bind(this);
    this.targetModal = this.targetModal.bind(this);
  }

  // previne o padrão e ativa o toggleModal
  btnToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // adiciona e remove a class
  toggleModal() {
    this.sectionLogin.classList.toggle("ativo");
  }

  // verifica se o alvo possui evento de target e executa btnToggleModal
  targetModal(event) {
    if (this.sectionLogin === event.target) this.toggleModal();
  }

  // adc eventos
  addEventModal() {
    this.loginBotao.addEventListener("click", this.btnToggleModal);
    this.fecharBotao.addEventListener("click", this.btnToggleModal);
    this.sectionLogin.addEventListener("click", this.targetModal);
  }

  init() {
    if (this.fecharBotao && this.loginBotao && this.sectionLogin) {
      this.addEventModal();
    }
    return this;
  }
}

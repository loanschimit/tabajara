/* eslint-disable quotes */
export default class RegExpPesquisa {
  constructor(pesquisa) {
    this.pesquisa = document.getElementById(pesquisa);
  }
  valueInput() {
    // console.log(this.pesquisa);
    // console.log(document.URL);
    const urlPage = document.URL;
  }

  init() {
    this.valueInput();
  }
}

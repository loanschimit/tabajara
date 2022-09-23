/* eslint-disable quotes */
export default class RegExpPesquisa {
  constructor(pesquisa) {
    this.pesquisa = document.getElementById(pesquisa);
    this.PAGina = document.querySelector(".geral-centro .pag1");
    this.itens = document.querySelectorAll(".geral-centro .addCarrinho");
    this.paginaPesquisa = document.querySelectorAll(".paginaPesquisa");

    this.inputChecado = document.querySelectorAll(
      ".categorias-check [type='checkbox']"
    );
    this.itensChecadosTrue = document.createElement("p");
  }
  cliqueSeach(event) {
    this.inputChecado.forEach((item) => {
      const promessa = new Promise((resolve) => {
        if (item.checked) {
          resolve(item.classList.add("ativado"));
          if (
            this.itensChecadosTrue.innerHTML.includes(
              item.nextElementSibling.innerHTML
            )
          ) {
            console.log("tem");
          } else {
            this.itensChecadosTrue.innerHTML +=
              item.nextElementSibling.innerHTML + " ";
          }

          resolve(this.pesquisaExecucao());
        } else {
          item.classList.remove("ativado");
          this.itensChecadosTrue.innerHTML =
            this.itensChecadosTrue.innerHTML.replace(
              `${item.nextElementSibling.innerHTML} `,
              ""
            );
          resolve(this.pesquisaExecucao());
        }

        //https://www.freecodecamp.org/portuguese/news/tutorial-de-promises-do-javascript-resolve-reject-e-encadeamento-em-js-e-na-es6/
      });
    });
  }

  pesquisaExecucao() {
    console.log(this.itensChecadosTrue.innerHTML);

    const regexpz = new RegExp(
      `(${this.itensChecadosTrue.innerHTML
        .replace(/\s/g, "|")
        .replace(/\|$/, "")})[\S+]?`,
      "gi"
    );
    this.itens.forEach((element) => {
      const textoDescricao = element.children[2].children[0].innerHTML;

      const verificar = regexpz.exec(textoDescricao);

      if (verificar) {
        element.style.display = "grid";
        this.PAGina.appendChild(element);
      } else {
        element.style.display = "none";
      }
    });
  }
  valueInput(event) {
    this.itens.forEach((element) => {
      const textoDescricao = element.children[2].children[0].innerHTML;
      const valorImput = this.pesquisa.value;

      const regexp = new RegExp(
        `(${valorImput.replace(/\s/g, "|")})[\S+]?`,
        "gi"
      );
      const verificar = regexp.exec(textoDescricao);

      if (verificar) {
        element.style.display = "grid";
        this.PAGina.appendChild(element);
      } else {
        element.style.display = "none";
      }
    });
  }

  addEventos() {
    this.inputChecado.forEach((item) => {
      item.addEventListener("click", this.cliqueSeach);
    });

    this.pesquisa.addEventListener("change", this.valueInput);
  }
  bindEvents() {
    this.cliqueSeach = this.cliqueSeach.bind(this);
    this.valueInput = this.valueInput.bind(this);
    this.pesquisaExecucao = this.pesquisaExecucao.bind(this);
  }
  init() {
    this.bindEvents();
    this.addEventos();
  }
}

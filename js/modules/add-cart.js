export default class InitStorageCar {
  constructor(item, destino, spanQnt) {
    this.item = document.querySelectorAll(item);
    this.destino = document.querySelector(destino);
    this.excluir = document.querySelectorAll(".botaoExcluir");
    this.spanQnt = document.querySelector(".abrir-carrinho span");
    this.pseudoQnt = document.querySelector(".abrir-carrinho");
    this.bodyCarrinho = document.querySelector(".body-carrinho");
  }

  pegarAtributos(event) {
    const itemClicado = event.currentTarget;
    [itemClicado].forEach((element) => {
      const imgCarro = element.children[1].children[0].src;
      const precoCarro = element.children[1].children[1].children[0].innerHTML;
      const parcelaCarro =
        element.children[1].children[1].children[1].innerHTML;
      const descricaoCarro = element.children[2].children[0].innerHTML;
      const vendidosCarro = element.children[2].children[1].innerHTML;
      const freteCarro = element.children[2].children[2].innerHTML;
      this.arrayAtributos = [
        imgCarro,
        precoCarro,
        parcelaCarro,
        descricaoCarro,
        vendidosCarro,
        freteCarro,
      ];
    });
  }

  addClassEstilizar(event) {
    this.itemEscolhido = event.currentTarget;
    this.itemEscolhido.classList.add("noCarro");
    if (this.itemEscolhido.classList.contains("noCarro")) {
      this.itemEscolhido.children[0].setAttribute("href", "#header-id");
      this.itemEscolhido.children[0].children[1].classList.add("chamarAtencao");
    } else {
    }
    this.itemEscolhido.children[0].children[1].src =
      "../img/svg/carrinhoPreto.svg";
    this.produtosArray = this.destino.innerHTML;
  }

  addClasseAoLink(element) {
    setTimeout(() => {
      element.children[0].addEventListener("click", () => {
        if (element.children[0].href === "http://127.0.0.1:5500/#header-id") {
          this.bodyCarrinho.classList.add("ativo");
        } else {
        }
      });
    }, 200);
  }

  pegarSetatt() {
    [this.destino.children].forEach((element) => {
      const arrayNova = Array.from(element);
      arrayNova.forEach((item, index) => {
        this.addClassAoIniciar(item, index);
      });
    });
  }

  addClassAoIniciar(element, index) {
    // console.log(element);
    this.item.forEach((itemS) => {
      const setaItem = itemS.dataset.set;
      // console.log(setaItem);
      const classesArray = element.classList.item(1);
      if (setaItem === classesArray) {
        setTimeout(() => {
          itemS.classList.add("noCarro");
          if (itemS.classList.contains("noCarro")) {
            itemS.children[0].setAttribute("href", "#header-id");
            itemS.children[0].children[1].classList.add("chamarAtencao");
          } else {
          }
          itemS.children[0].children[1].src = "../img/svg/carrinhoPreto.svg";
          console.log();
        });
      } else {
      }
    });
  }

  removeClassEstilizar(element, index) {
    this.item.forEach((itemS) => {
      const setaItem = itemS.dataset.set;
      const arrayElements = Array.from(element);
      const classeItemArray =
        event.currentTarget.parentElement.classList.item(1);
      // console.log(itemS)
      if (setaItem === classeItemArray) {
        itemS.classList.remove("noCarro");
        itemS.children[0].removeAttribute("href");
        itemS.children[0].children[1].classList.remove("chamarAtencao");
        itemS.children[0].children[1].src = "../img/svg/fogo.svg";
      } else {
      }
      this.produtosArray = this.destino.innerHTML;
    });
  }

  criarItemCarro(event) {
    event.preventDefault();
    const terceiraClasse = event.currentTarget.classList.item(2);

    if (terceiraClasse === null) {
      this.addClassEstilizar(event);

      const divItemCar = document.createElement("div");
      divItemCar.classList.add("etiqueta2");
      this.dataAtributoValue = event.currentTarget.dataset.set;
      divItemCar.classList.add(this.dataAtributoValue);

      const botaoExcluir = document.createElement("button");
      botaoExcluir.classList.add("botaoExcluir");
      botaoExcluir.innerHTML = `X`;
      divItemCar.appendChild(botaoExcluir);

      this.excluirItem(botaoExcluir);

      const divMidEtiq = document.createElement("div");
      divMidEtiq.classList.add("mid-etiqueta2");
      divItemCar.appendChild(divMidEtiq);

      const imgMidEtiq = document.createElement("img");
      imgMidEtiq.setAttribute("src", this.arrayAtributos[0]);
      divMidEtiq.appendChild(imgMidEtiq);

      const divSpan = document.createElement("div");
      divMidEtiq.appendChild(divSpan);

      const spanPreco = document.createElement("span");
      spanPreco.classList.add("preco2");
      spanPreco.innerHTML = this.arrayAtributos[1];
      divSpan.appendChild(spanPreco);

      const spanParcela = document.createElement("span");
      spanParcela.classList.add("preco-parcela2");
      spanParcela.innerHTML = this.arrayAtributos[2];
      divSpan.appendChild(spanParcela);

      const divBotEtiq = document.createElement("div");
      divBotEtiq.classList.add("bot-etiqueta2");
      divItemCar.appendChild(divBotEtiq);

      const descricaoItem = document.createElement("span");
      descricaoItem.classList.add("descricao-etiqueta2");
      descricaoItem.innerHTML = this.arrayAtributos[3];
      divBotEtiq.appendChild(descricaoItem);

      const vendidosItem = document.createElement("span");
      vendidosItem.classList.add("vendidos2");
      vendidosItem.innerHTML = this.arrayAtributos[4];
      divBotEtiq.appendChild(vendidosItem);

      const freteItem = document.createElement("span");
      freteItem.classList.add("frete2");
      freteItem.innerHTML = this.arrayAtributos[5];

      divBotEtiq.appendChild(freteItem);
      this.itensCarrinho = divItemCar;
      const italico = document.createElement("i");
      this.itensCarrinho.appendChild(italico);

      setTimeout(() => {
        localStorage.setItem("itens", `${this.destino.innerHTML}`);
      }, 0);

      this.destino.appendChild(this.itensCarrinho);

      [this.destino.children].forEach((element) => {
        this.spanQnt.innerHTML = element.length;

        if (element.length > 0) {
          this.pseudoQnt.classList.add("ativo");
        } else {
          this.pseudoQnt.classList.remove("ativo");
        }
      });
    } else {
    }
  }

  puxarStorageSave(index) {
    let re = /<i><\/i><\/div>/g;
    const produtos = localStorage.getItem("itens");

    if (produtos) {
      const regeVirgulas = /\>,/gim;
      const produtosReplace = produtos.replace("undefined", "");
      this.produtosArray = produtosReplace;
      this.destino.innerHTML = this.produtosArray;

      [this.destino.children].forEach((element) => {
        if (element.length === 0) {
          this.spanQnt.innerHTML = "";
          this.pseudoQnt.classList.remove("ativo");
        } else {
          this.pseudoQnt.classList.add("ativo");
          this.spanQnt.innerHTML = element.length;
        }
      });
    } else {
    }
    this.excluirItemLS(this.excluir);
  }

  excluirItemLS(event) {
    const botaonovo = document.getElementsByClassName("botaoExcluir");
    const arrayBotoes = Array.from(botaonovo);
    arrayBotoes.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();

        [this.destino.children].forEach((element, index) => {
          this.removeClassEstilizar(element, index);
        });
        element.parentElement.remove();
        localStorage.setItem("itens", `${this.destino.innerHTML}`);
        [this.destino.children].forEach((element, index) => {
          // const arrayElements = Array.from(element);
          if (element.length === 0) {
            this.spanQnt.innerHTML = "";
            this.pseudoQnt.classList.remove("ativo");
          } else {
            this.pseudoQnt.classList.add("ativo");
            this.spanQnt.innerHTML = element.length;
          }
        });
      });
    });
  }

  excluirItem(botao) {
    botao.addEventListener("click", (event) => {
      event.preventDefault();
      [this.destino.children].forEach((element, index) => {
        this.removeClassEstilizar(element, index);
      });
      botao.parentElement.remove();
      localStorage.setItem("itens", this.destino.innerHTML);
      [this.destino.children].forEach((element) => {
        if (element.length === 0) {
          this.spanQnt.innerHTML = "";
          this.pseudoQnt.classList.remove("ativo");
        } else {
          this.pseudoQnt.classList.add("ativo");
          this.spanQnt.innerHTML = element.length;
        }
      });
    });
  }

  adcEventos() {
    this.item.forEach((element) => {
      this.addClasseAoLink(element);
      element.addEventListener("dblclick", this.pegarAtributos);
      element.addEventListener("dblclick", this.criarItemCarro);

      return element;
    });
  }

  bindEvents() {
    this.pegarSetatt = this.pegarSetatt.bind(this);
    this.addClassAoIniciar = this.addClassAoIniciar.bind(this);

    this.excluirItem = this.excluirItem.bind(this);
    this.puxarStorageSave = this.puxarStorageSave.bind(this);
    this.pegarAtributos = this.pegarAtributos.bind(this);
    this.criarItemCarro = this.criarItemCarro.bind(this);
  }

  init() {
    this.puxarStorageSave();
    this.bindEvents();
    this.adcEventos();

    this.pegarSetatt();
  }
}

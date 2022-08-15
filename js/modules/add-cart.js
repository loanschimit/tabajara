export default class InitStorageCar {
  constructor(item, destino, spanQnt) {
    this.item = document.querySelectorAll(item);
    this.destino = document.querySelector(destino);
    this.excluir = document.querySelectorAll(".botaoExcluir");
    this.spanQnt = document.querySelector(".abrir-carrinho span");
    this.pseudoQnt = document.querySelector(".abrir-carrinho");
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

  criarItemCarro(event) {
    const divItemCar = document.createElement("div");
    divItemCar.classList.add("etiqueta2");

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

    const itemTexto = this.destino.innerHTML;
    const salvandoStorage = localStorage.setItem("itens", `${itemTexto}`);

    this.destino.appendChild(this.itensCarrinho);

    [this.destino.children].forEach((element) => {
      // this.localStorageSave();

      this.spanQnt.innerHTML = element.length;

      if (element.length > 0) {
        this.pseudoQnt.classList.add("ativo");
      } else {
        this.pseudoQnt.classList.remove("ativo");
      }
    });
  }
  puxarStorageSave(index) {
    let re = /<i><\/i><\/div>/g;
    const produtos = localStorage.getItem("itens");
    console.log(produtos);

    if (produtos) {
      const regeVirgulas = /\>,/gim;
      const produtosReplace = produtos.replace("undefined", "");
      this.produtosArray = produtosReplace;
      // .split("<i></i>");
      this.destino.innerHTML = this.produtosArray;
      // this.destino.innerHTML.replace(">,", ">");
      // console.log(this.destino.innerHTML);

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
  excluirItemLS(botao) {
    console.log(botao);
    const botaonovo = document.getElementsByClassName("botaoExcluir");
    const arrayBotoes = Array.from(botaonovo);
    arrayBotoes.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        element.parentElement.remove();
        const salvandoStorage = localStorage.setItem(
          "itens",
          `${this.itemTexto}`
        );
        this.produtosArray = this.destino.innerHTML;
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
    });
    console.log(arrayBotoes);
    console.log(botaonovo);
  }

  excluirItem(botao) {
    console.log(this.botao);
    botao.addEventListener("click", (event) => {
      event.preventDefault();
      botao.parentElement.remove();
      this.produtosArray = this.destino.innerHTML;
      [this.destino.children].forEach((element) => {
        if (element.length === 0) {
          this.spanQnt.innerHTML = "";
          this.pseudoQnt.classList.remove("ativo");
        } else {
          this.pseudoQnt.classList.add("ativo");
          this.spanQnt.innerHTML = element.length;
        }
      });

      localStorage.setItem("item", this.textoItem);
    });
  }

  adcEventos() {
    this.item.forEach((element) => {
      element.addEventListener("dblclick", this.pegarAtributos);
      element.addEventListener("dblclick", this.criarItemCarro);

      return element;
    });
  }

  bindEvents() {
    this.excluirItem = this.excluirItem.bind(this);
    this.puxarStorageSave = this.puxarStorageSave.bind(this);
    this.pegarAtributos = this.pegarAtributos.bind(this);
    this.criarItemCarro = this.criarItemCarro.bind(this);
  }

  init() {
    this.puxarStorageSave();
    this.bindEvents();
    this.adcEventos();
  }
}

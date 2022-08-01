export default class ItemFetch {
  constructor(lista) {
    this.lista = document.querySelectorAll(lista);

    this.itemContent = {
      imagem: document.querySelectorAll(`${lista} .mid-etiqueta2 img`),
      descricao: document.querySelectorAll(`${lista} .descricao-etiqueta2`),
      preco: document.querySelectorAll(`${lista} .preco2`),
      precoParcela: document.querySelectorAll(`${lista} .preco-parcela2`),
      vendidos: document.querySelectorAll(`${lista} .vendidos2`),
      frete: document.querySelectorAll(`${lista} .frete2`),
    };
  }

  async puxarInformacao() {
    try {
      const itemLista = await fetch("./itens.json");
      const itemJSON = await itemLista.json();
      // console.log(itemJSON[0].pag1)
      return itemJSON[0].pag1;
    } catch (erro) {
      console.log(erro);
    }
  }

  atribuicao(index) {
    this.addLoopFetch(index);
  }

  addLoopFetch() {
    this.puxarInformacao().then((r) => {
      r.forEach((item, index) => {
        this.itemContent.descricao[index].innerHTML = r[index].item1.descricao;
        this.itemContent.preco[index].innerHTML = r[index].item1.preco;
        this.itemContent.precoParcela[index].innerHTML = r[index].item1.parcela;
        this.itemContent.vendidos[index].innerHTML = r[index].item1.vendidos;
         this.itemContent.frete[index].innerHTML = r[index].item1.frete;

        this.itemContent.imagem[index].setAttribute(
          "src",
          `${r[index].item1.img}`
        );
        
      });
    });
  }

  addLoopDescricao() {
    this.itemContent.descricao.forEach((item, index) => {
      this.atribuicao(index);
    });
    this.itemContent.imagem.forEach((item, index) => {
      this.atribuicao(index);
    });
    this.itemContent.preco.forEach((item, index) => {
      this.atribuicao(index);
    });
    this.itemContent.precoParcela.forEach((item, index) => {
      this.atribuicao(index);
    });
    this.itemContent.vendidos.forEach((item, index) => {
      this.atribuicao(index);
    });
    this.itemContent.frete.forEach((item, index) => {
      this.atribuicao(index);
    });
  }

  init() {
    this.addLoopDescricao();
  }
}

import debounce from "./debounce-scroll.js";
export default class InitDateObject {
  constructor(dia, hora, minuto) {
    this.dia = document.querySelector(dia);
    this.hora = document.querySelector(hora);
    this.minuto = document.querySelector(minuto);
    this.tempoObjct = {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }
  timer(tempo) {
    return tempo / (24 * 60 * 60 * 1000);
  }
  horaAtual() {
    const data = new Date();
    const futuro = new Date("Dec 24 2022 23:59");

    const diasAgora = this.timer(data.getTime());
    const diasFuturo = this.timer(futuro.getTime());

    let diasRestantes = diasFuturo - diasAgora;
    this.tempoObjct.dias = Math.floor(diasRestantes);
    let sobroudeDias = diasRestantes % 1;
    this.tempoObjct.horas = Math.floor(sobroudeDias * 24);
    let sobroudeHoras = (sobroudeDias * 24) % 1;
    this.tempoObjct.minutos = Math.floor(sobroudeHoras * 60);
    let sobroudeMinutos = (sobroudeHoras * 60) % 1;

    this.tempoObjct.segundos = Math.floor(sobroudeMinutos * 60);

    // console.log(horas);
    // console.log(minutos);
    // console.log(segundos);
    return diasRestantes;
  }
  mostrarTempo() {
    setInterval(() => {
      this.dia.innerText = Math.floor(this.tempoObjct.horas || 0);
      this.hora.innerText = Math.floor(this.tempoObjct.minutos || 0);
      this.minuto.innerText = Math.floor(this.tempoObjct.segundos || 0);
      clearInterval(this.horaAtual(), 1000);
    }, 1000);
  }
  init() {
    this.mostrarTempo();
    this.horaAtual();
  }
}

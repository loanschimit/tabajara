/* eslint-disable quotes */
export default class InitDateObject {
  constructor(dia, hora, minuto) {
    this.dia = document.querySelector(dia);
    this.hora = document.querySelector(hora);
    this.minuto = document.querySelector(minuto);
    this.horaAtual();
  }
  horaAtual() {
    const data = new Date();
    const futuro = new Date("Oct 07 2022 23:59");

    function timer(tempo) {
      return tempo / (24 * 60 * 60 * 1000);
    }

    const diasAgora = timer(data.getTime());
    const diasFuturo = timer(futuro.getTime());

    let diasRestantes = diasFuturo - diasAgora;
    let sobroudeDias = diasRestantes % Math.floor(diasRestantes);

    const horas = sobroudeDias * 24;
    const minutos = sobroudeDias * 24 * 60;

    let segundos = Math.floor(sobroudeDias * 24 * 60 * 60);

    this.dia.innerText = Math.floor(diasRestantes || 0);
    this.hora.innerText = Math.floor(horas || 0);
    this.minuto.innerText = Math.floor(minutos || 0);
  }
  dataPromocional(tempo) {}
}
/*
for(let i = 0; i < 60; i++){
  setTimeout(()=>{
    console.log(i)
  },1000 * i)
}
 */

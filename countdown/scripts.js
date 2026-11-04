import CountDown from './countdown.js';

const tempoparaONatal = new CountDown('24 December 2026 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new CountDown('31 december 2026 23:59:59 GMT-0300');

console.log(tempoparaONatal.total);
setInterval(() => {
  console.log(tempoParaOAnoNovo.total);
  console.log(tempo)
})





//console.log(diasParaONatal.hours);

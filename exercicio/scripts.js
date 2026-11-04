const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handlerClick);

function handlerClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(Response => Response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}


const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(Response => Response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace(',',',');
  })
}

setInterval(fetchBtc, 500);

fetchBtc();


const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokens/random')
  .then(r => r.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  })
}

btnProxima.addEventListener('click', puxarPiada);

puxarPiada();


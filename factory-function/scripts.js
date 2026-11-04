//function createButton(text) {
  //  const numeroSecreto = 'duafsdufsgfdhtg20';
  //}

  //function element() {
    //const buttonElement = document.createElement('button');
    //buttonElement.innerText = text;
    //return buttonElement;
  //}

  //return {
    //text,
    //element
 // }

  //const btnComprar = createButton('Comprar');
  //const btnVender = createButton('Vender');

  //console.log(btnComprar, btnVender)


function Pessoa(nome) {
  if(!new.target)
    return new Pessoa(nome)
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('Andre');

console.log(designer);

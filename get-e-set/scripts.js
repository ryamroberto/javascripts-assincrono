const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(numero){
    this._numero = numero * 200;
  }
}

frutas.nova = 'Banana';
frutas.nova = 'Morando';

class Button {
  constructor(text, color){
    this.text = text;
    this.color = color;
  }

  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color
    return buttonElement;
  }
}

const blueButton = new Button('Comprar', 'blue');

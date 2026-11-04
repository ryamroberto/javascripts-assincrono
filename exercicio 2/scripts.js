function createButton(backGround = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = backGround;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton();


const frutas = ['Banana', 'Uva', 'Morando'];
const comidas = ['Pizza', 'Batata'];

comidas.push('Cenoura', 'Pimenta', ...frutas);

console.log(comidas);

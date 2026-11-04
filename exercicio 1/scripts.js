function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
  };
}

const btns = $$('button');

console.log(btns.hide().show());

btns.on('click', (event) => {
  console.log('Clicou no botão:', event.target.innerText);
});

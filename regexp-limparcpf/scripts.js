const cpfs = document.querySelectorAll('.cpf li');

const elementInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
};

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
};

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const formataCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
};

const substituiCPFS = (cpfsElements) => {
  const resultadoTexto = elementInnerText(cpfsElements);
  const cpfsFormatados = formataCPFS(resultadoTexto);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};

substituiCPFS(cpfs);

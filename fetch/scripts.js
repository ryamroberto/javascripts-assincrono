const sobre = fetch('./sobre.html');

sobre.then(r => r.text())
.then(body => {
  div.innerHTML = body;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
  console.log(titulo);
});

// function handlerKeyboard({key, keyCode}) {
  //console.log(key, keyCode);
 //}

 //document.addEventListener('keyup', handlerKeyboard);


 const btn = document.querySelector('button');
 const btnStyle = getComputedStyle(btn);

 const {backgroundColor, margin, color} =  btnStyle;

 console.log(backgroundColor);
 console.log(margin);
 console.log(color);

 let cursoAtivo = 'JavaScripts';
 let cursoInativo = 'HTML';

 [cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

 console.log(cursoAtivo);
 console.log(cursoInativo);


 const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
 }

 const {cor: bobCor} = cachorro;

 
//const regeXP = /\w+[-.]/gi;

//const regexp1 = new RegExp('\\w', 'gi');

//const frase = 'JavaScripts Linguagem 101';
//console.log(frase.replace(regexp1, 'X'))

//const regexp = /Java/g;
//const frase = 'JavaScripts e Jav Linguagem 101, Java';

//let i = 0;
//while(regexp.test(frase)){
  //console.log(i++, regexp.lastIndex)
//}


//const frase = 'JavaScripts, TypeSCripts, CoffeeScripts, Java';

//const regeXP = /\w+/g;

//const resultados = frase.split(regeXP);

//console.log(resultados)


//const tags = `
//  <ul>
 //   <li>Item 1</li>
   // <li>Item 2</li>
  //</ul>
//`;

//const regexp = /<li/g;

//const resultado = tags.replace(regexp, '&$ class="ativa"');
//console.log(resultado);

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com`

const regexp = /(\w+@)([\w.]+)/g;

const resultado = emails.replace(regexp, function(...args) {
  if(args[2] === 'homail.com.br') {
    return args[1] + 'hotmail.com.br';
  } else if(args[2] === 'ggmail.com.br') {
    return args[1] + 'gmail.com.br';
  } else if(args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br';
  } else {
    return args[0];
  }
});

console.log(resultado);

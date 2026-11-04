//fetch('https://pokeapi.co/api/v2/pokemon/1/')
//.then(Response => Response.json())
//.then(pokemon => {
  //console.log(pokemon);
//});

const url = 'https://jsonplaceholder.typicode.com/posts/2';
const options = {
  method: 'HEAD',
};

fetch(url, options)
  .then(response => {
    console.log(`Status: ${response.status}`);
    response.headers.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });


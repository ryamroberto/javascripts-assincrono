const links = document.querySelectorAll('a');

function handlerClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
    replaceContent(pageText);
}

function replaceContent(newText) {
  const newhtml = document.createElement('div');
  newhtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newhtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title.querySelector('title').innerHTML;
}

  window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
  })

links.forEach(link => {
  link.addEventListener('click', handlerClick);
});

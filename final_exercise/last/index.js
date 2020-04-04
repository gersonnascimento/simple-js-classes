var list = document.querySelector('#app #repo-list #repos');

var pegaNoGithub = function() {
  exibirTextoUnico('Carregando...');

  axios.get('https://api.github.com/users/'+ document.querySelector('#app input').value + '/repos')
    .then(function(response) {
      console.log(response);
      tacaNaLista(response.data);
    })
    .catch(function(error){
      exibirTextoUnico('Nada encontrado!');
    });
}

var tacaNaLista = function(repos){
  list.innerHTML = '';
  for (repo of repos){
    adicionarElemento(repo.name);
  }
}

var adicionarElemento = function(texto){
  var element = document.createElement('li');
  var text = document.createTextNode(texto);
  element.appendChild(text);
  list.appendChild(element);
}

var exibirTextoUnico = function(texto){
  list.innerHTML = '';
  var element = document.createElement('li');
  var text = document.createTextNode(texto);
  element.appendChild(text);
  list.appendChild(element);
}

var pegaNoGithub = function() {
  axios.get('https://api.github.com/users/'+ document.querySelector('#app input').value + '/repos')
    .then(function(response) {
      console.log(response);
      tacaNaLista(response.data);
    })
    .catch(function(error){
      console.warn(error);
    });
}

var tacaNaLista = function(repos){
var list = document.querySelector('#app #repo-list #repos');
list.innerHTML = '';

  for (repo of repos){
    var element = document.createElement('li');
    var text = document.createTextNode(repo.name);
    element.appendChild(text);

    list.appendChild(element);
  }
}

function checaIdade(idade) {
  return new Promise(function(resolve, reject){
    if (idade > 17) {
      resolve();
    } else {
      reject();
    }
  })
}
checaIdade(18)
 .then(function() {
 console.log("Maior");
 })
 .catch(function() {
 console.log("Menor");
 });

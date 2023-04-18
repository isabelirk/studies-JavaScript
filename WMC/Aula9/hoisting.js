// Todas as declarações de variáveis são movidas para o todo do seu escopo local, mas não o seu valor.
// As declarações de funções e classes também são movidas para o topo.

/*
console.log(animalEstimacao); //ReferenceError: Cannot access 'animalEstimacao' before initialization
let animalEstimacao = "Atena";
*/

/*
let animalEstimacao;
console.log(animalEstimacao); //undefined
animalEstimacao = "Atena";
*/

function mostrarNome() {
  console.log("Oi! Tudo bem? Me chamo " + nome + "!"); //undefined
}

let nome;
mostrarNome();
nome = "Isabeli Reik";

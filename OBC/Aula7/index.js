// Escopo é o contexto onde a variável foi declarada, podendo ser mais externo ou mais interno.
// Variáveis no escopo mais externo podem ser usadas dentro de escopos mais internos.
let pokemon = "Charmander"; //escopo mais externo

function evolucion() {
  pokemon = "Charmeleon"; //escopo mais interno
}

console.log(pokemon);
evolucion();
console.log(pokemon);

//------------------------------------------------------------------------

// Variáveis no escopo mais interno não podem ser usadas fora dele em escopos mais externos.
function createAnimal() {
  let animal = "Gato";
}

createAnimal();
//console.log(animal); //ver erro no console

//------------------------------------------------------------------------

// Apenas variáveis declaradas com var ficam disponíveis em um escopo mais externo, mas usar somente em casos muito específicos.
function evaluateGrade(grade) {
  if (grade > 60) {
    var approved = true;
    let situation = "Aprovado";
  } else {
    var approved = false;
    let situation = "Reprovado";
  }

  console.log(grade);
  console.log(approved);
  //console.log(situation); //ver erro no console
}

evaluateGrade(83);
evaluateGrade(49);

//------------------------------------------------------------------------

// Mas mesmo assim, o var não consegue "sair" para fora do escopo da função, de forma mais externa.
function hello() {
  var text = "Olá, mundo!";
}
//console.log(text); //ver erro no console

//------------------------------------------------------------------------

// Apenas variáveis declaradas com var são carregadas para o começo do código, no entanto, o seu valor atribuido não, por isso é mostrado como undefined.
console.log(namee);
console.log(surname); //já o let gera um erro no console

var namee = "Isaac";
let surname = "Pontes";

// Função Anônima - sem parâmetros
function mostrarMensagem() {
  return console.log(
    "Parabéns! Você chegou ao final do treinamento de JavaScript!"
  );
}

mostrarMensagem();

// Outro exemplo
function multiplarNumeros(numero1, numero2) {
  return numero1 * numero2;
}

let resultadoFinal = multiplarNumeros(3, 2);
console.log(resultadoFinal);

// Outro exemplo
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarNumerosImpares() {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      console.log(numeros[i]);
    }
  }
}

mostrarNumerosImpares();

// Escopo Global
let localNascimento = "Rio de Janeiro"; // variável global

function mostrarLocalNascimento() {
  let localOndeMorei = "Buenos Aires"; // variável local
  console.log(localNascimento);
  console.log(localOndeMorei);
}

console.log(localNascimento);
//console.log(localOndeMorei); // ReferenceError: localOndeMorei is not defined

mostrarLocalNascimento();

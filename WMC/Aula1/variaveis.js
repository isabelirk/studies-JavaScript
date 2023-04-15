// var -> é recomendado seu uso em casos específicos
var n1 = 10;
var n2 = 20;
var soma = n1 + n2;
console.log(soma);

// let -> declaração de uma variável local de escopo do bloco opcionalmente inicializando com algum valor
let saudacao = "Olá mundo!";

if (true) {
  let saudacao = "Estou aprendendo JavaScript!";
  console.log(saudacao);
}

console.log(saudacao);

// const -> declaração de uma constante de escopo de bloco apenas de leitura
const cidade = "Erechim";

function estado() {
  const cidade = "Chapecó";
  console.log(cidade);
}

estado();
console.log(cidade);

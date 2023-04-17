const fruits = ["Maça", "Abacaxi", "Morango", "Banana", "Melão", "Jabuticaba"];

// Une todos os elementos através de uma string
console.log(fruits.join(" - "));

// Retorna o índice da última ocorrência do valor especificado encontrado no array
let aux = fruits.lastIndexOf("Melão");
console.log(aux);

// Executa uma dada função em cada elemento de um array
fruits.forEach((listaDeFrutas) => {
  console.log(listaDeFrutas);
});

let fruitBowl = [
  { fruits: "Maça", qtd: 2 },
  { fruits: "Abacaxi", qtd: 1 },
  { fruits: "Morango", qtd: 8 },
  { fruits: "Banana", qtd: 5 },
  { fruits: "Melão", qtd: 1 },
  { fruits: "jabuticaba", qtd: 15 },
];

// Cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento da matriz de chamada
const quantidadeDeFrutas = fruitBowl.map((item) => {
  return item.qtd;
});
console.log(quantidadeDeFrutas);

// Cria uma nova matriz preenchida com elementos que passam em um teste fornecido por uma função
const listarFrutas = fruitBowl.filter((fruta) => fruta.qtd >= 5);
console.log(listarFrutas);

// Testa se todos os elementos do array passam pelo teste implementado pela função fornecida
const quantidade = 3;
const verificaQuantidade = fruitBowl.every((fruta) => fruta.qtd == quantidade);
console.log(verificaQuantidade);

// Testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída
const poucaQuantidade = 2;
const poucasFrutas = fruitBowl.some((fruta) => fruta.qtd <= poucaQuantidade);
console.log(poucasFrutas);

// Retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, retorna undefined
const comprarFruta = fruitBowl.find((fruta) => fruta.qtd <= 1);
console.log(comprarFruta);

let gastos = [27.86, 71.95, 36.5, 100.0];

// Executa uma função reducer (fornecida pelo dev) para cada elemento do array, resultando num único valor de retorno
let somarValores = gastos.reduce((total, valor) => {
  return total + valor;
});
console.log(somarValores);

// Retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1
const maiorGasto = 100;
const maioresGastos = gastos.findIndex((valor) => valor >= maiorGasto);
console.log(maioresGastos);

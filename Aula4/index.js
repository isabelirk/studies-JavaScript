const fruits = ["Maça", "Abacaxi", "Morango", "Banana", "Melão", "Jabuticaba"];
console.log(fruits);

// Adicionando um elemento no final do array e retorna o tamanho atual
fruits.push("Pêssego");
console.log(fruits);

// Adicionando um elemento no início do array e retorna o tamanho atual
fruits.unshift("Kiwi");
console.log(fruits);

// Remove o último elemento do array e devolve o elemento removido
let lastElement = fruits.pop();
console.log(lastElement);
console.log(fruits);

// Remove o primeiro elemento do array e devolve o elemento removido
lastElement = fruits.shift();
console.log(lastElement);
console.log(fruits);

// Pesquisa se o elemento está presente no array e retorna true ou false
const contain = fruits.includes("Jabuticaba");
console.log(contain);

// Pesquisa em qual índice o elemento está presente no array
const index = fruits.indexOf("Jabuticaba");
console.log(index);

// "Corta" ou copia uma parte do array
const copy = fruits.slice(0, 3);
const contrary = fruits.slice(-3); // quando negativo, conta os índices do final para o início do array
console.log(copy);
console.log(contrary);
console.log(fruits); // o array original não é modificado

// Concatentando elementos
const fruitBowl = contrary.concat(copy, "Ameixa");
console.log(fruitBowl);

// Substitui elementos no array e retorna os elementos removidos
const removedElements = fruitBowl.splice(3, 2, "Melância", "Laranja");
console.log(removedElements);
console.log(fruitBowl);

// Iterar sobre os elementos do array
for (let i = 0; i < fruitBowl.length; i++) {
  const aux = fruitBowl[i];
  console.log(aux + " se encontra na posição " + i);
}

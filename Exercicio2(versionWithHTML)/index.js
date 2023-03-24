let prohibited1 = window.prompt("Digite o primeiro número:"); // entrada 1
//console.log(firstNumber);

let prohibited2 = window.prompt("Digite o segundo número:"); // entrada 2
//console.log(secondNumber);

// a função prompt sempre retorna uma string
const firstNumber = parseFloat(prohibited1);
const secondNumber = parseFloat(prohibited2);

let sum = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let division = firstNumber / secondNumber;
let multiplication = firstNumber * secondNumber;

console.log("Valores calculados:");
console.log("Soma: " + sum);
console.log("Subtração: " + subtraction);
console.log("Divisão: " + division);
console.log("Multiplicação: " + multiplication);

alert(
  "Valores calculados com sucesso!\n" +
    "\nSoma: " +
    sum +
    "\nSubtração: " +
    subtraction +
    "\nDivisão: " +
    division +
    "\nMultiplicação: " +
    multiplication
);

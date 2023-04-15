const number = parseFloat(
  prompt("Qual número você deseja calcular a tabuada?")
);
let result = "";

for (let i = 1; i <= 20; i++) {
  result += " -> " + number + " x " + i + " = " + number * i + "\n";
}

alert("Resultado da Tabuada de " + number + ":\n\n" + result);

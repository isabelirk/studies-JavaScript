const firstCar = window.prompt("Digite o nome do primeiro carro:");
const firstCarSpeed = window.prompt("Digite a velocidade do primeiro carro:");

const secondCar = window.prompt("Digite o nome do segundo carro:");
const secondCarSpeed = window.prompt("Digite a velocidade do segundo carro:");

if (firstCarSpeed > secondCarSpeed) {
  alert("A velocidade do carro " + firstCar + " é maior.");
} else if (firstCarSpeed < secondCarSpeed) {
  alert("A velocidade do carro " + secondCar + " é maior.");
} else {
  alert("As velocidades dos dois carros são iguais.");
}

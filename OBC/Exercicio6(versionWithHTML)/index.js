const tourist = prompt("Olá turista! Qual é o seu nome?");
let cities = "";
let score = 0;

let newCity = prompt("Você visitou alguma cidade? (Sim/Não)");

while (newCity === "Sim") {
  let city = prompt("Qual é o nome da cidade visitada?");
  cities += " - " + city + "\n";
  score++;
  newCity = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Turista: " +
    tourist +
    "\nQuantidade de cidades visitadas: " +
    score +
    "\nCidades visitadas:\n" +
    cities
);

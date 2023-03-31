const deck = [];
let option = "";

do {
  option = prompt(
    "Cartas no baralho: " +
      deck.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (option) {
    case "1":
      const newCard = prompt("Qual é a nova carta?");
      deck.push(newCard);
      break;
    case "2":
      const pickCard = deck.pop();
      if (!pickCard) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("Você puxou um(a) " + pickCard);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida, digite novamente!");
  }
} while (option !== "3");

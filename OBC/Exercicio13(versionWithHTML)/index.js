const immobileArray = [];
let option = "";

do {
  option = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis.\nTotal de imóveis no momento: " +
      immobileArray.length +
      "\n\nEscolha uma opção:\n1. Cadastrar novo imóvel\n2. Listar imóveis cadastrados\n3. Sair"
  );

  switch (option) {
    case "1":
      const immobile = {};

      immobile.owner = prompt("Informe o nome do proprietário(a) do imóvel:");
      immobile.bedrooms = parseFloat(
        prompt("Quantos quartos possui o imóvel?")
      );
      immobile.bathrooms = parseFloat(
        prompt("Quantos banheiros possui o imóvel?")
      );
      immobile.garage = prompt("O imóvel possui garagem? (Sim/Não)");

      const userConfirm = confirm(
        "Deseja salvar este imóvel?\n" +
          "\nProprietário: " +
          immobile.owner +
          "\nQuartos: " +
          immobile.bedrooms +
          "\nBanheiros: " +
          immobile.bathrooms +
          "\nPossui Garagem? " +
          immobile.garage
      );

      if (userConfirm) {
        immobileArray.push(immobile);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert(
          "Não foi possivel salvar o imóvel informado... Por favor, tente novamente!"
        );
      }
      break;
    case "2":
      for (let i = 0; i < immobileArray.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            immobileArray[i].owner +
            "\nQuartos: " +
            immobileArray[i].bedrooms +
            "\nBanheiros: " +
            immobileArray[i].bathrooms +
            "\nPossui Garagem? " +
            immobileArray[i].garage
        );
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "3");

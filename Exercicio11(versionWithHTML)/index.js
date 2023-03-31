let queue = []; //fila
let option = "";

do {
  let patients = "";
  for (let i = 0; i < queue.length; i++) {
    patients += i + 1 + "º - " + queue[i] + "\n";
  }

  option = prompt(
    "Fila de Pacientes atualizada:\n" +
      patients +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );

  switch (option) {
    case "1":
      const newPatients = prompt("Qual é o nome do paciente?");
      queue.push(newPatients);
      break;
    case "2":
      const consultedPatient = queue.shift();
      if (!consultedPatient) {
        alert("Não há pacientes na fila!");
      } else {
        alert("O paciente " + consultedPatient + " foi removido da fila!");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida, digite novamente!");
      break;
  }
} while (option !== "3");

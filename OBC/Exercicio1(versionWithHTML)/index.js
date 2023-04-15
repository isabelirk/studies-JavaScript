let firstName = window.prompt("Digite o seu primeiro nome:");
//console.log(firstName);

let lastName = window.prompt("Digite o seu sobrenome:");
//console.log(lastName);

let fieldStudy = window.prompt("Digite o seu campo de estudo:");
//console.log(fieldStudy);

let yearBirth = window.prompt("Digite o seu ano de nascimento:");
//console.log(yearBirth);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
//console.log(currentYear); // ano atual

let age = currentYear - yearBirth;
//console.log(age);

console.log("Recruta cadastrado com sucesso!");
console.log("Os dados preenchidos foram:");
console.log("Nome completo: " + firstName + " " + lastName);
console.log("Campo de estudo: " + fieldStudy);
console.log("Idade: " + age);

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    firstName +
    " " +
    lastName +
    "\nCampo de estudo: " +
    fieldStudy +
    "\nIdade: " +
    age
);

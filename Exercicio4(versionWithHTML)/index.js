const firstCharacterName = window.prompt(
  "Digite o nome do primeiro personagem que irá atacar:"
);
const firstCharacterAttack = window.prompt(
  "Digite o valor do ataque do primeiro personagem:"
);

const secondCharacterName = window.prompt(
  "Digite o nome do segundo personagem que irá defender:"
);
let secondCharacterHealthPoints = window.prompt(
  "Digite o valor de pontos de vida do segundo personagem:"
);
const secondCharacterDefensePower = window.prompt(
  "Digite o valor de poder de defesa do segundo personagem:"
);
const secondCharacterShield = window.prompt(
  "Digite 'true' se o segundo personagem possui escudo ou 'false' se ele não possui:"
);

let damageDone = 0;

if (
  firstCharacterAttack > secondCharacterDefensePower &&
  secondCharacterShield === "false"
) {
  damageDone = firstCharacterAttack - secondCharacterDefensePower;
} else if (
  firstCharacterAttack > secondCharacterDefensePower &&
  secondCharacterShield === "true"
) {
  damageDone = (firstCharacterAttack - secondCharacterDefensePower) / 2;
}

secondCharacterHealthPoints -= damageDone;

alert(
  firstCharacterName +
    " causou " +
    damageDone +
    " pontos de dano em " +
    secondCharacterName
);

alert(
  firstCharacterName +
    "\nPoder de ataque: " +
    firstCharacterAttack +
    "\n\n" +
    secondCharacterName +
    "\nPontos de vida: " +
    secondCharacterHealthPoints +
    "\nPoder de defesa: " +
    secondCharacterDefensePower +
    "\nPossui escudo: " +
    secondCharacterShield
);

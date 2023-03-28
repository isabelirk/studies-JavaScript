const word = prompt("Informe uma palavra:");
let invertedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += word[i];
}

if (word === invertedWord) {
  alert("A palavra " + word + " é um palíndromo!");
} else {
  alert(
    "A palavra " +
      word +
      " não é um palíndromo!\n\n" +
      word +
      " !== " +
      invertedWord
  );
}

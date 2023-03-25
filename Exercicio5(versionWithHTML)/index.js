const measureValue = window.prompt("Digite o valor da medida em metros (m):");

const chosenMeasure = window.prompt(
  "Escolha para qual opção deseja convervet:\n\n1 - milímetro (mm)\n2 - centímetro (cm)\n3 - decímetro (dm)\n4 - decâmetro (dam)\n5 - hectômetro (hm)\n6 - quilômetro (km)"
);

switch (chosenMeasure) {
  case "1":
    alert("Resultado: " + measureValue + "m = " + measureValue * 1000 + "mm");
    break;
  case "2":
    alert("Resultado: " + measureValue + "m = " + measureValue * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + measureValue + "m = " + measureValue * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + measureValue + "m = " + measureValue / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + measureValue + "m = " + measureValue / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + measureValue + "m = " + measureValue / 1000 + "km");
    break;
  default:
    alert("Opção inválida!");
    break;
}

// String -> '' ou "" ou ``
let nome = "Isabeli Reik";
let nomeMae = "Mônica Reik";
let frase = `Meu nome é ${nome} e o nome da minha mãe é ${nomeMae}.`;
console.log(frase);

// Number -> int ou float ou exponencial
const n1 = 4;
const n2 = 3.99;
const n3 = 3e5; // 3*10 com expoente 5
console.log(n1);
console.log(n2);
console.log(n3);

// BigInt -> n
const valor = 2589745631598745699652445896n;
console.log(typeof valor);
console.log(valor);

// Boolean
let x = 5;
let y = 5;
let z = 9;
console.log(x == y);
console.log(x == z);

// Undefinied -> a variável foi declara, mas seu valor é indefinido
let a;
console.log(a);

// Null -> a variável foi declarada, mas seu valor é vazio
const b = null;
console.log(b);

// Object
const estudante = {
  nome: "Isabeli",
  sobrenome: "Reik",
  idade: 27,
  curso: "JavaScript",
  ativo: true,
};
console.log(estudante);

// Symbol -> função que retorna um tipo símbolo único, que pode ser usado como um identificador
const id1 = Symbol("teste");
const id2 = Symbol("teste");
console.log(id1 === id2);

// objeto ={ chave: propriedade}

let pessoa = {
  nome: "Isabeli",
  sobrenome: "Reik",
  idade: 27,
  profissao: "Estudante",
};

console.log(pessoa);

// Brackets (Colchetes) vs Dot notation (ponto)

let listarProfissao1 = pessoa["profissao"];
console.log(listarProfissao1);

let listarProfissao2 = pessoa.profissao;
console.log(listarProfissao2);

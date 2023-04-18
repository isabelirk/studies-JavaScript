let pessoa = {
  nome: "Isabeli",
  sobrenome: "Reik",
  idade: 27,
  profissao: "Estudante",
  ativo: "true",
};

if ("profissao" in pessoa) {
  console.log("A chave profissão existe no objeto Pessoa.");
}

for (let listarPessoa in pessoa) {
  console.log(pessoa[listarPessoa]);
}

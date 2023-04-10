// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function createUser(name, email, password, type = "admin") {
  const usuario = { name, email, password, type }; // É o mesmo que "name: name"
  console.log(usuario);
}

createUser("Isabeli", "isabeli@email.com", "1234");

// Utilizando objetos como parâmetro de uma função
function createUser2(userData) {
  console.log(userData);
}

const userData = {
  name: "",
  telephone: "",
  email: "",
  password: "",
  birthday: "",
  address: "",
};
createUser2(userData);

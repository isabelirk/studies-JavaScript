// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function createUser(name, email, password, type = "admin") {
  const usuario = { name, email, password, type }; // É o mesmo que "name: name"
  console.log(usuario);
}

createUser("Isabeli", "isabeli@email.com", "1234");

//------------------------------------------------------------------------

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

//------------------------------------------------------------------------

function createProduct(name, price) {
  const product = { name, price, stock: 1 };
  return product;
}
// const notebook = createProduct("Notebook Intel Core i3 8GB", 3000);
// console.log(notebook);

// Podemos escrever de outra forma...
console.log(createProduct("Smartphone Samsung Galaxy", 1000));

//------------------------------------------------------------------------

function rectangleArea(base, height) {
  return base * height;
}

function squareArea(side) {
  return rectangleArea(side, side);
}

console.log(squareArea(8));

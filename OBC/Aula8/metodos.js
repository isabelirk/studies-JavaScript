let aux1 = typeof console; //object
let aux2 = typeof console.log; //function ou um método do objeto console

console.log(aux1);
console.log(aux2);

let people = {
  name: "Isabeli",
  age: 27,
  hello() {
    console.log("Olá mundo! Meu nome é " + this.name + ".");
  },
};

console.log(people);
people.hello();

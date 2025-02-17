// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector(".showme");
console.log(button);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector("#pillado");
console.log(title);
// 1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll("p")
console.log(parrafos);
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);
// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
const testme = document.querySelectorAll('[data-function="testMe"]');
console.log(testme);
// 1.6 Usa querySelector para mostrar por consola el tercer personaje con el atributo data-function="testMe".
const person = document.querySelectorAll('[data-function="testMe"]');
const third = person[2];
console.log(third);

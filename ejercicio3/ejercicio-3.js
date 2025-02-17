// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countriess = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const body = document.querySelector("body");
const h2 = document.createElement("h2");
h2.textContent = "Países";
const ul = document.createElement("ul");
ul.appendChild(h2);
ul.className = "countries";
for (const countrie of countriess){
	const li = document.createElement("li");
	li.innerHTML = `
	${countrie}`
	ul.appendChild(li);
}
body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
//AL REALIZARLO DE ESTA MANERA NO ME FUNCIONA Y NO SÉ POR QUÉ
// const parrafo = document.querySelector("p");
// parrafo.classList.remove("fn-remove-me");
//DE ESTA SI
document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]');
const h22 = document.createElement("h2");
h22.textContent = "Marcas de coche";
const ull = document.createElement("ul");
ull.appendChild(h22);
for(const car of cars){
	const li = document.createElement("li");
	li.innerHTML = `${car}`
	ull.appendChild(li);
}
divPrintHere.appendChild(ull);
console.log(body)
// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (const countrie of countries){
	const div = document.createElement("div");
	div.className = "countrie"
	div.innerHTML = `
	<h4>${countrie.title}</h4>
	<img src= "${countrie.imgUrl}"
	alt= "${countrie.title}">`
	body.appendChild(div);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const button = document.createElement("button");
button.innerText = "Last delete";

const uul = document.querySelector(".countries");
uul.insertAdjacentElement("afterend", button);

button.addEventListener("click", (ev) => {
	const divs = document.querySelector(".countrie");
	const lastdiv = body.lastElementChild;
	if(divs.className === lastdiv.className){
		body.removeChild(lastdiv);
	}
	const div = document.querySelector(".countrie");
	if (!div){
		const p = document.createElement("p");
		p.textContent = "No se puede borrar más";
		body.appendChild(p);
		button.disabled = true;
	}
	})

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const alldivs = document.querySelectorAll("div");

alldivs.forEach(div => {
	const btn = document.createElement("button");
	btn.innerText = "DELETE";
	div.appendChild(btn);
	btn.addEventListener("click", (ev) => {
		div.remove();
	})
});


// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const body = document.querySelector("body");
const div1 = document.createElement("div");
// content.textContent = " ";
body.appendChild(div1);
console.log(body);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div");
const p = document.createElement("p");
div2.appendChild(p);
body.appendChild(div2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement("div");
for(let i = 0; i < 6; i++){
    let parrafo = document.createElement("p");
    div3.appendChild(parrafo);
}
body.appendChild(div3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const txt = document.createElement("p");
txt.textContent = "Soy dinámico";
body.appendChild(txt);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const title = document.querySelector(".fn-insert-here");
title.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for(const app of apps){
    const li = document.createElement("li");
    li.innerHTML = `
    <p>${app}</p>`
    ul.appendChild(li);
}
body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodos = document.querySelectorAll(".fn-remove-me");
nodos.forEach(nodo => {
    nodo.remove();
})
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const divOne = document.querySelector("div");
divOne.insertAdjacentHTML("afterend", "<p>Voy en medio!</p>");
console.log(body);
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divss = document.querySelectorAll(".fn-insert-here");
divss.forEach(div => {
    div.insertAdjacentHTML("afterbegin", "<p>Voy dentro!</p>");
})



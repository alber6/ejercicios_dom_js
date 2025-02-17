// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click.
const btn = document.createElement("button");
btn.id = "btnToClick";
btn.textContent = "Click";
btn.addEventListener("click", (ev) => {
    console.log("Información del evento click:", event);
})
document.body.appendChild(btn);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector(".focus");
input.addEventListener("focus", (ev) => {
    console.log(input.value);
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inpt = document.querySelector(".value");
inpt.addEventListener("input", (ev) => {
    console.log(inpt.value);
})



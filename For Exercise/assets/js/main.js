const elementos = [
  { tag: "p", texto: "Oi" },
  { tag: "div", texto: "Salve" },
  { tag: "footer", texto: "Olá" },
  { tag: "section", texto: "Opa" },
];

// const body = document.body;

// for (const elemento of elementos) {
//   const novoElemento = document.createElement(elemento.tag);
//   novoElemento.innerHTML = elemento.texto;

//   body.appendChild(novoElemento);
// }

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  // tagCriada.innerHTML = texto; // innerText
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);

// const body = document.body;

// for (let i = 0; i < elementos.length; i++) {
//   const elemento = elementos[i];

//   const novoElemento = document.createElement(elemento.tag);

//   novoElemento.innerHTML = elemento.texto;

//   body.appendChild(novoElemento);
// }

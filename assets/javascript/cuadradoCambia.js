let elemento = document.querySelector("#key");
let elemento2 = document.querySelector("#key2");

elemento.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    elemento.style.backgroundColor = "pink";
    console.log("a");
  } else if (event.key === "s" || event.key === "S") {
    elemento.style.backgroundColor = "orange";
  } else if (event.key === "d" || event.key === "D") {
    elemento.style.backgroundColor = "#87CEEB";
  } else if (event.key === "q" || event.key === "Q") {
    let nuevoElemento = document.createElement("div");
    nuevoElemento.classList.add("caja1");
    console.log("hola mundo");
    elemento2.appendChild(nuevoElemento);}
    else if (event.key === "w" || event.key === "W") {
      let nuevoElemento = document.createElement("div");
      nuevoElemento.classList.add("caja2");
      console.log("hola mundo");
      elemento2.appendChild(nuevoElemento);}
      else if (event.key === "e" || event.key === "E") {
        let nuevoElemento = document.createElement("div");
        nuevoElemento.classList.add("caja3");
        console.log("hola mundo");
        elemento2.appendChild(nuevoElemento);}
});

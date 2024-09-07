function cambiarColor(elemento, color = "green") {
    elemento.style.background = color;
}

const ele = document.querySelector("#ele1");
ele.style.background = "green"
ele.addEventListener("click", function() {
    cambiarColor(ele, 'yellow');
});

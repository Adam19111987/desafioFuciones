
function cambiarColor(elemento, color = "green") {
    
    elemento.classList.remove('green', 'yellow');

    if (color === "yellow") {
        elemento.classList.add('yellow');
    } else {
        elemento.classList.add('green');
    }
}


const ele = document.querySelector("#ele1");
ele.addEventListener("click", function() {
   
    if (ele.classList.contains('green')) {
        cambiarColor(ele, 'yellow');
    } else {
        cambiarColor(ele, 'green');
    }
});

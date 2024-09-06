const bodyElement = document.querySelector('body');

       
        bodyElement.addEventListener('click', function(event) {
           
            const targetId = event.target.id;
            if (targetId === 'azul' || targetId === 'rojo' || 
                targetId === 'verde' || targetId === 'amarillo') {
               
                event.target.style.backgroundColor = 'black';
            }
        });

        let elemento = document.querySelector("#key");

       
        elemento.addEventListener("keydown", function(event) {
            switch (event.key.toLowerCase()) {
                case "a":
                    elemento.style.backgroundColor = "pink";
                    console.log("a");
                    break;
                case "s":
                    elemento.style.backgroundColor = "orange";
                    break;
                case "d":
                    elemento.style.backgroundColor = "#87CEEB";
                    break;
        
                
                case "q":
                    let nuevoElemento1 = document.createElement("div");
                    nuevoElemento1.style.backgroundColor = "purple";
                    nuevoElemento1.style.width = "200px";
                    nuevoElemento1.style.height = "200px";
                    nuevoElemento1.style.margin = "10px";
                    bodyElement.appendChild(nuevoElemento1);
                    break;
                case "w":
                    let nuevoElemento2 = document.createElement("div");
                    nuevoElemento2.style.backgroundColor = "gray";
                    nuevoElemento2.style.width = "200px";
                    nuevoElemento2.style.height = "200px";
                    nuevoElemento2.style.margin = "10px";
                    bodyElement.appendChild(nuevoElemento2);
                    break;
                case "e":
                    let nuevoElemento3 = document.createElement("div");
                    nuevoElemento3.style.backgroundColor = "brown";
                    nuevoElemento3.style.width = "200px";
                    nuevoElemento3.style.height = "200px";
                    nuevoElemento3.style.margin = "10px";
                    bodyElement.appendChild(nuevoElemento3);
                    break;
        
                default:
                    break;
            }
        });
        
        
        elemento.focus();
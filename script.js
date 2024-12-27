const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn"); // Arreglo de todos los botones

botones.forEach(boton => { // el forech nos permite recorrer todos los elementos del arreglo anterior
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return; // return va permitir que solo si apretamos c nos retorne 0 y no ejecute mas bloque de codigo depues de este if
        }        

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); //slice nos permite que tome 2 numero desde la pocision que queremos arrancar
            }
            return;
        }

        if (boton.id === "igual") {
            pantalla.textContent = eval(pantalla.textContent); //Con la funcion eval, nos evalua lo que hay en pantalla en cuanto a operaciones matematicas
            return;
        }

        if (pantalla.textContent === "0") { // condicional para que reemplce el 0 si digitamos otro numero
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }    
    })
})


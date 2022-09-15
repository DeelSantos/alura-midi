function tocaSom () {
    document.querySelector('.teclado').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

while (cont < listaDeTeclas.length) {
    listaDeTeclas[cont].onclick = tocaSom;

    cont += 1; 

    console.log(cont);
}



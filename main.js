function tocaSomPom () {
    document.querySelectorAll('.teclas').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

while (contador < 9) {
    listaDeTeclas[0].onclick = tocaSomPom;

    contador += 1; 
}



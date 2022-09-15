function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

while (cont < 9) {
    listaDeTeclas[cont].onclick = tocaSomPom;

    cont += 1; 

    console.log(cont);
}



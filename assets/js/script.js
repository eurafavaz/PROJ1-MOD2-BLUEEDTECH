let titulo = document.querySelectorAll("#titulohumor");
let descricao = document.querySelectorAll("#descricaohumor");
let images = document.querySelectorAll("#imgaranha");
let validaBotao = document.querySelectorAll("#botaohumor");

function alterar() {
    if (validaBotao == 1) {
        titulo.innerHTML = "Miles Morales: Invisível";
        descricao.innerHTML = "Modo Invisível ativado!";
        images.setAttribute("src", "./assets/img/Marvel-s-Spider-Man-Miles-Morales.png");
        validaBotao++;

    } else if (validaBotao == 2) {
        titulo.innerHTML = "Miles Morales: Choque";
        descricao.innerHTML = "Modo Elétrico ativado!";
        images.setAttribute("src", "./assets/img/morales114-1050x591.jpg");
        validaBotao++;

    } else if (validaBotao == 3) {
        titulo.innerHTML = "Miles Morales: Teia";
        descricao.innerHTML = "Modo Teia de Aranha ativado!";
        images.setAttribute("src", "./assets/img/miles-morales-mcu.jpg");
        validaBotao++;
    }

}


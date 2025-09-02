// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const teclaAñadir = document.getElementById ("amigo");

function agregarAmigo () {
    let agregarNombres = document.getElementById ("amigo").value;
    if (agregarNombres === ``){
        alert ("Por favor ingrese un nombre correcto")
        return;
    }
    if (amigos.includes(agregarNombres)){
        alert ("Este amigo ya fue agregado")
        document.getElementById ("amigo").value = "";
        return;
    }

    amigos.push (agregarNombres);
    document.getElementById ("amigo").value = ``;
    console.log (amigos)
    listaNombreAmigos();
}

function listaNombreAmigos () {
    let listaDeAmigos = document.getElementById ("listaAmigos");
    listaDeAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i ++){
        let listaElementos =  document.createElement (`li`);
        listaElementos.innerHTML = amigos [i];
        listaDeAmigos.append(listaElementos);
    }

}

function sortearAmigo () {
    if (amigos.length === ``){
        alert ("Por favor ingrese un minimo de amigos")
    } else {
        let sorteoDeAmigos = Math.floor(Math.random ()*amigos.length);
        console.log (sorteoDeAmigos);
        let obtenerNombreSorteado = amigos [sorteoDeAmigos];
        console.log (obtenerNombreSorteado);
        let mostrarAmigoSorteado = document.getElementById ("resultado");
        mostrarAmigoSorteado.innerHTML = obtenerNombreSorteado;
    }

}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
    console.log("Juego reiniciado");
}
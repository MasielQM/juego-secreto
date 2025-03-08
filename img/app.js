const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    if (!inputAmigo.value.trim()){  // .trim verifica que no esté vacío ni contenga solo espacios
        alert("debes ingresar un nombre");
        return;
    }
    listaAmigos.push(inputAmigo.value.trim());
    //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value.trim()}</li>`;

    inputAmigo.value ="";
    inputAmigo.focus();
}

function sortearAmigo() {
  //const random = ..... 
    const random =Math.floor((Math.random()*listaAmigos.length));
    const amigoSecreto = listaAmigos[random]
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
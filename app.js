
function agregarAmigo() {
    //Validación de agregar nombre vacio
    if (document.getElementById("amigo").value === "") {
        alert("Ingresa un nombre válido");
        
    }
    //Agregar textbox a una variable
    var amigo = document.getElementById("amigo").value;

    // 
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(amigo));
    document.getElementById("listaAmigos").appendChild(li);
    //Borrar texto ingresado
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
 
    var list = document.getElementById('listaAmigos').childNodes;
    let amigos = [];
    for(var i=0;i < list.length; i++) {
        var arrValue = list[i].innerHTML;
       
        amigos.push(arrValue);
    }
 
    console.log(amigos);
 
    var amigoSecreto = getRandomArbitrary(amigos.length);
 
    console.log(amigos[amigoSecreto]);
 
    document.getElementById("resultado").innerHTML = "";
 
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Tu amigo secreto es: " + amigos[amigoSecreto]));
    document.getElementById("resultado").appendChild(li);
}
 
function getRandomArbitrary(max) {
    console.log(Math.floor(Math.random() * (max)));
    return Math.floor(Math.random() * (max));
}



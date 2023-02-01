//Al hacer click en subtitulo se despliega un pequeño texto
function texto() {
    var parrafo = document.getElementById('una');
    if (parrafo.style.display == "none") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
}

function validar() {
    let inf = document.forms["fin"]["msj"].value;
    if(inf == "") {
        alert("De no tener algún proyecto en mente, solo mande un mail a la dirección antes dada");
        return false;
    }
}
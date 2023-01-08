
function encriptar() {
    var texto = document.getElementById("input_texto").value.toLowerCase();
    var textoCifrado = texto.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado.replace(/o/igm, "ober");
    var textoCifrado = textoCifrado.replace(/i/igm, "imes");
    var textoCifrado = textoCifrado.replace(/a/igm, "ai");
    var textoCifrado = textoCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgmunieco").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("btn_copiado").style.display = "show";
    document.getElementById("btn_copiado").style.display = "inherit";

}


function desencriptar() {
    var texto = document.getElementById("input_texto").value.toLowerCase();
    var textoCifrado = texto.replace(/"enter"/igm, "e");
    var textoCifrado = textoCifrado.replace(/"ober"/igm, "o");
    var textoCifrado = textoCifrado.replace(/"imes"/igm, "i");
    var textoCifrado = textoCifrado.replace(/ai/igm, "a");
    var textoCifrado = textoCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgmunieco").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("btn_copiado").style.display = "show";
    document.getElementById("btn_copiado").style.display = "inherit";

}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    navigator.clipboard.writeText ("contenido");
    alert("se copio con exito");
}
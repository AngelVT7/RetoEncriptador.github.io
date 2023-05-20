

function encriptar(){
    let textoEntrada = document.getElementById("texto").value;
    let mensajeEncrip = document.getElementById("txto-tar");
    let muneco = document.getElementById("muneco");
    let parrafo = document.getElementById("instrucciones");
    
    let textoEncrip = textoEntrada
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if(textoEntrada.length != 0){
        document.getElementById("texto").value = textoEncrip;
        mensajeEncrip.textContent = "Texto encriptado!";
        parrafo.textContent = "";
        muneco.src = "./Rec/cerradoEncrip.png";
        muneco.width = 400;

    }else{
        muneco.src = "./Rec/muñeco.png";
        alert("Debes ingresar un texto");
    }
}

function desencriptar(){
    let textoEntrada = document.getElementById("texto").value;
    let mensajeEncrip = document.getElementById("txto-tar");
    let muneco = document.getElementById("muneco");
;
    
    let textoEncrip = textoEntrada
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if(textoEntrada.length != 0){
            document.getElementById("texto").value = textoEncrip;
            mensajeEncrip.textContent = "Texto desencriptado!";
            muneco.src = "./Rec/abiertoDesencrip.png";
            muneco.width = 400;
    
        }else{
            muneco.src = "./Rec/muñeco.png";
            alert("Debes ingresar un texto");
        }
}

function copiar() {
    var textarea = document.getElementById("texto");
    textarea.select();
    document.execCommand('copy');
    alert("El contenido se ha copiado al portapapeles.");
}



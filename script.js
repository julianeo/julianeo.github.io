function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter")
        .replace(/a/gi, "url")
        .replace(/e/gi, "of")
        .replace(/i/gi, "ih")
        .replace(/o/gi, "er")
        .replace(/u/gi, "awq")
        .replace(/b/gi, "zd")
        .replace(/d/gi, "qr")
        .replace(/g/gi, "pd")
        .replace(/h/gi, "vn")
        .replace(/k/gi, "xz")
        .replace(/m/gi, "yt")
        .replace(/p/gi, "hs");
        
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}
    
var boton1 = document.querySelector("#boton-encriptar"); 
    boton1.onclick = encriptar;

function desencriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto
        .replace(/url/gi, "a")
        .replace(/of/gi, "e")
        .replace(/ih/gi, "i") 
        .replace(/er/gi, "o")
        .replace(/awq/gi, "u")
        .replace(/zd/gi, "b")
        .replace(/qr/gi, "d")
        .replace(/pd/gi, "g")
        .replace(/vn/gi, "h")
        .replace(/xz/gi, "k")
        .replace(/yt/gi, "m")
        .replace(/hs/gi, "p");

    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}

 var boton2 = document.querySelector("#boton-desencriptar");
     boton2.onclick = desencriptar;

 

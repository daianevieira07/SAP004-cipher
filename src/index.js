import cipher from './cipher.js';


var deslocamento = document.getElementById("deslocamento")


let deslocamento1 = 1

function less() {
    if (deslocamento1 > 1) {
        deslocamento1--;

        deslocamento.innerHTML = deslocamento1
    }
}

function more() {
    if (deslocamento1 < 33) {
        deslocamento1++;
        
        deslocamento.innerHTML = deslocamento1
    }
}


let enviar = function () {
    let deslocamento = document.getElementById("deslocamento").value
    let formValor = document.getElementById("formValor")
    let texto = document.getElementById("textoInicial").value
    let retorno
    if (formValor.valorRadio.value == "cifrar") {
        retorno = cipher.encode(deslocamento, texto)
    }
    alert(retorno)
}

document.getElementById("btnLess").addEventListener("click", less)
document.getElementById("btnMore").addEventListener("click", more)
document.getElementById("botao").addEventListener("click", enviar)




//console.log(cipher);
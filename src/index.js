import cipher from './cipher.js';


let deslocamento = document.getElementById("deslocamento")
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


function escolha() {
    if (formValor.valorRadio.value == "cifrar") {
     
      cifrar()
    }
    else {
     
     decifrar ()
    }
}

function cifrar() {
      let textoInicial = document.getElementById("textoInicial").value;
      let novoDeslocamento = Number(deslocamento.value) 
      let textoFinal = cipher.encode(novoDeslocamento, textoInicial);
      document.getElementById("textoFinal").innerHTML = textoFinal;
  }
  
  function decifrar() {
      let textoInicial = document.getElementById("textoInicial").value;
      let novoDeslocamento = Number(deslocamento.value) 
      let textoFinal = cipher.decode(novoDeslocamento, textoInicial);
      document.getElementById("textoFinal").innerHTML = textoFinal;
  }
  
  
  document.getElementById("btnLess").addEventListener("click", less)
  document.getElementById("btnMore").addEventListener("click", more)

 // document.getElementById("formValor").addEventListener("click", escolha)
  
  document.getElementById("cifrar").addEventListener("click", cifrar)
  document.getElementById("decifrar").addEventListener("click", decifrar)
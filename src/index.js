import cipher from './cipher.js';


 var deslocamento = document.getElementById("deslocamento")
 var deslocamento1 = 1

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
  document.getElementById("cifrar").addEventListener("click", cifrar)
  document.getElementById("decifrar").addEventListener("click", decifrar)


const cipher = {

  encode(deslocamento, textoInicial) {
    textoInicial = textoInicial.toUpperCase();
    let mensagemInicial = [];
    let mensagemFinal = "";
    deslocamento = Number(deslocamento);

    for (let i = 0; i < textoInicial.length; i++) {
      mensagemInicial[i] = (textoInicial.charAt(i));
      mensagemInicial[i] = (((textoInicial[i].charCodeAt(0) - 65 + deslocamento) % 26) + 65);

      if (textoInicial[i] != " ")
        mensagemFinal += String.fromCharCode(mensagemInicial[i]);
      else
        mensagemFinal += " ";

    }
    return mensagemFinal;
  },


  decode(deslocamento, textoInicial) {
    textoInicial = textoInicial.toUpperCase();
let textoInicial = [];
let mensagemFinal = "";

deslocamento = Number(deslocamento);

for (let i = 0; i < textoInicial.length; i++) {
  textoInicial[i] = (textoInicial.charAt(i));
  textoInicial[i] = (((textoInicial[i].charCodeAt(0) - 90 - deslocamento) % 26) + 90);

  if (textoInicial[i] != " ") {
    mensagemFinal += String.fromCharCode(textoInicial[i]);
  }
  else {
    mensagemFinal += " ";

    return mensagemFinal;
  }
}


  }
}
export default cipher;


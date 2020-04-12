
const cipher = {


  encode: function (deslocamento, textoInicial) {
    textoInicial = textoInicial.toUpperCase();
    let mensagemInicial = [];
    let mensagemFinal = "";
    deslocamento = Number(deslocamento);

    for (let i = 0; i < textoInicial.length; i++) {
      mensagemInicial[i] = (textoInicial.charAt(i));
      mensagemInicial[i] = (((mensagemInicial[i].charCodeAt(0) - 65 + deslocamento) % 26) + 65);



      if (textoInicial[i] != " ") {
        mensagemFinal += String.fromCharCode(mensagemInicial[i]);
      }
      else {
        mensagemFinal += "";
      }
    }
    return mensagemFinal;

  },



  decode: function (deslocamento, textoInicial) {
    textoInicial = textoInicial.toUpperCase();
    let mensagemInicial = [];
    let mensagemFinal = "";
    deslocamento = Number(deslocamento);

    for (let i = 0; i < textoInicial.length; i++) {
      mensagemInicial[i] = (textoInicial.charAt(i));
      mensagemInicial[i] = (((mensagemInicial[i].charCodeAt(0) - 90 - deslocamento) % 26) + 90);


      if (textoInicial[i] != " ") {
        mensagemFinal += String.fromCharCode(mensagemInicial[i]);
      }
      else {
        mensagemFinal += "";
      }
    }

      return mensagemFinal;


    }


  
}
export default cipher;


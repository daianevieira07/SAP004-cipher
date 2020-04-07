const cipher = {
  encode(deslocamento, texto) {
    Number(deslocamento)

    texto = texto.toUpperCase()
    let messagearray = []
    let textoRetorno = ""
    
    for(let i=0;i<texto.length;i++){
      messagearray[i] = (texto.charAt(i))
      messagearray[i] = (((messagearray[i].charCodeAt(0)) -65 + deslocamento) % 26 + 65)
      textoRetorno += String.fromCharCode(messagearray[i]) 

    }
    return textoRetorno;
  },




/*if ((messageArray[i].charCodeAt(0) < 65 || messageArray[i].charCodeAt(0) > 90) ){
 messageArray[i] = (messageArray[i].charCodeAt())*/




  decode() {
    let a = "oiiii"
    return a
  }
};

export default cipher;
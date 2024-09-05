(function(){
    const nomeUsuario = "Ruan"
    
    if(nomeUsuario) {
        const topBarElemento = document.createElement("div") // cria um elemento
        topBarElemento.className = "top-bar" // pega o nome da classe 
        topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario} </b> </p>`

       // elementoPai.insertBefore(novoElemento, elementoReferencial)

       const elementoPai = document.querySelector(".hero")
       elementoPai.insertBefore(topBarElemento,elementoPai.firstElementChild)

    }
    
    
})()
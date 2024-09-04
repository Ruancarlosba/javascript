(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    
    
    if(nomeUsuario) {

        //document.querySelector(".top-bar p").textContent = "Bem-Vindo(a)," +nomeUsuario
        
        //elemento.textContent += nomeUsuario
        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
    } else {
        //elemento.parentElement.style.display = "none"
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)

    }
})()
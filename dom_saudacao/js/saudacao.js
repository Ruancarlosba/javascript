(function(){
    const nomeUsuario = "Daniel"
    //document.querySelector(".top-bar p").textContent = "Bem-Vindo(a)," +nomeUsuario
    const elemento = document.querySelector(".top-bar p")
    //elemento.textContent += nomeUsuario
    elemento.innerHTML += "<b>" + nomeUsuario + "</b>"
})()
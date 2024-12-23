(function () {
    'use strict'

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro") 

    /*btn.addEventListener("click", function(e){
        
    })*/

    formCadastro.addEventListener("submit", function(e){
        
        console.log(txtTitulo.value) 
        if(!txtTitulo.value) {
            showErrorMessage("preencha todos os campos",function(){
                txtTitulo.focus()
            })
            e.preventDefault()
            
        }

    })

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessagecloosebtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg,cb) {
       // alert(msg)
       feedbackMessage.classList.add("show")
       feedbackMessage.getElementsByTagName("p")[0].textContent = msg

       feedbackMessagecloosebtn.focus()
       

       function hideErrorMessage() {
        feedbackMessage.classList.remove("show")
        feedbackMessagecloosebtn.removeEventListener("click",hideErrorMessage) 

        if(typeof cb === "function") {
            cb()
           }
       }

       function pressedkeyboardOnBtn(e){
        console.log(e.keyCode)
       }

       feedbackMessagecloosebtn.addEventListener("click",hideErrorMessage) 
       feedbackMessagecloosebtn.addEventListener("keyup", pressedkeyboardOnBtn)

       
    }

    

    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    mostrarNumero(maxima)

    //contadorContainer.style.removeAttribute("style")
    contadorContainer.style.display = 
    "block"

    function checkLength(){
        let numeroLetrasdigitadas = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasdigitadas)
        mostrarNumero(caractersRestantes)
    }

    function mostrarNumero(n) {
        resta.textContent = n
    }

    txtDescricao.addEventListener("input", checkLength)


    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")
    chkAceito.addEventListener("change", function(){
        btn.disabled = !this.checked
    })
    
})()
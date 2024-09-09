const txtEmail = document.getElementById("txtEmail") 

function editarEmail() {

    txtEmail.disabled = false // true -  acrescenta o disabled , false - remove o disabled
    txtEmail.focus()
    
}

function disableEmail() {

    txtEmail.disabled = true
    
}
    



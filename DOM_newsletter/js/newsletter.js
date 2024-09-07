const txtEmail = document.getElementById("txtEmail") // input
const msgFeedback = document.getElementById("newsletterFeedback")



function cadastrarEmail() {

    let email = txtEmail.value // tratando o objeto txtEmail e recuperando.
    msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso `
  
}
    



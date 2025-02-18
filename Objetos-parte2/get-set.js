let tipo = ""
//const tiposPermitidos = {"mamifero": true, "anfibio": true, "reptil": true}

const tiposPermitidos = ["mamifero", "anfibio"]

const cachorro = {
    name: "rex",
    get tipo(){
        return tipo
    },
    set tipo(_tipo){

        //if(tiposPermitidos[_tipo]){ padraõ objeto
        if(tiposPermitidos.indexOf(_tipo) >= 0){
            tipo = _tipo
        }

        tipo = _tipo
    }
}

//  IIFE para eviatr seja escopo global
(function(){

    
})()
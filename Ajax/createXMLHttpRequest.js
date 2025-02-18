function createXMLHttpRequest(method, url, cb, data =null) {

    const xrh = new XMLHttpRequest()

    xrh.open(method, url)
    xrh.send(data)

    xrh.onreadystatechange = verificaAjax

    function verificaAjax(){
       
            if(xrh.status === 200 || xrh.status === 304) {

                
                const json = JSON.parse(xrh.responseText)
                if(typeof cb === "function") {
                    cb(json)
                }

                
            } else if(typeof cb === "function") {
                
                cb({
                    status: xhr.status,
                    message: "algo deu errado com a conexão",
                    obj: xhr
                })
            }
    }


}

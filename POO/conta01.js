class ContaBancaria {
    constructor(cliente, numero) {

        if(this.constructor === ContaBancaria) {
            throw new Error("ContaBacaria é uma classe")
        }
        this.cliente  = cliente
        this.numero = numero
        this.saldo = 0
    }

    depositar(valor) {
        this.saldo += valor
    }

    Sacar(){
        throw new Error("metodo sacr precisa ser implmentado")
    }

}

const conta = new ContaBancaria("Daniel, 1")
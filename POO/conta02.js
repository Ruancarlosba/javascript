class ContaBancaria {
    constructor(cliente, numero) {
        if (this.constructor === ContaBancaria) {
            throw new Error("ContaBancaria é uma classe abstrata")
        }
        this.cliente = cliente
        this.numero = numero
        this.saldo = 0
    }

    depositar(valor) {
        this.saldo += valor
    }

    // Método abstrato, deve ser implementado nas classes filhas
    sacar(valor) {
        throw new Error("Método sacar precisa ser implementado")
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.aniversario = Date.now()
    }

    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(cliente, numero) {
        super(cliente, numero)
        this.limite = 1000  // Aqui define-se o limite de conta corrente
    }

    sacar(valor) {
        let disponivel = this.saldo + this.limite

        if (valor > disponivel) {
            throw new Error("Saldo insuficiente")
        }

        this.saldo -= valor
    }
}

// Criando contas
const conta1 = new ContaPoupanca("Daniel", 1)
const conta2 = new ContaCorrente("João", 2)

// Depósitos
conta1.depositar(1000)
conta2.depositar(1000)

// Sacar valores
conta1.sacar(500) // Sucesso, saldo suficiente na conta poupança
console.log(conta1) // Exibe saldo após saque

conta2.sacar(1500) // Sucesso, o limite de conta corrente é utilizado
console.log(conta2) // Exibe saldo após saque

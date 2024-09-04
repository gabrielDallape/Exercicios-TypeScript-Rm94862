"use strict";
// Definição da classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    exibirSaldo() {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
}
// Definição da subclasse ContaCorrente
class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo, limiteCredito) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }
    // Sobrescrita do método exibirSaldo
    exibirSaldo() {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
    }
}
// Exemplo de uso
const contaCorrenteExemplo = new ContaCorrente('gabriel', 544000, 23333423000);
console.log(contaCorrenteExemplo.exibirSaldo());

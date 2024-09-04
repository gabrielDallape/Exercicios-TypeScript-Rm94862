"use strict";
// Definição da classe Funcionario
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    descricao() {
        return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
}
// Definição da subclasse Gerente
class Gerente extends Funcionario {
    constructor(nome, cargo, salario, departamento) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }
    descricaoDetalhada() {
        return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
}
// Exemplo de uso
const gerenteExemplo = new Gerente('gabriel ', 'chefe', 10, 'adm');
console.log(gerenteExemplo.descricaoDetalhada());

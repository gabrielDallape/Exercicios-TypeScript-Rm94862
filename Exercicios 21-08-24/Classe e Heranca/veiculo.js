"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}
class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
    exibirInfoCompleta() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}.`);
    }
}
let aluno1 = new Aluno("Gabriel", 21, "Engenharia da Computacao");
aluno1.exibirInfoCompleta();

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    exibirInfo(): void{
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
    }
}

class Aluno extends Pessoa {
    curso: string;

    constructor(nome: string, idade:number, curso:string){
        super(nome, idade);
        this.curso = curso;
    }

    exibirInfoCompleta(): void{
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}.`)
    }
}

let aluno1 = new Aluno("Gabriel", 21, "Engenharia da Computacao");
aluno1.exibirInfoCompleta();
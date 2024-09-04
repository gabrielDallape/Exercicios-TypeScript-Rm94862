"use strict";
// Função que recebe uma PessoaEmpregada
function exibirInformacoesEmpregado(empregado) {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}
// Exemplo de uso
const pessoaEmpregadaExemplo = { nome: 'gabriel', idade: 95, empresa: 'atibaia', salario: 28000 };
console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));

"use strict";
// Definição da classe de erro personalizada
class MailInvalidoError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MailInvalidoError';
        // Ajusta o protótipo para garantir que a instância do erro seja corretamente identificada
        Object.setPrototypeOf(this, MailInvalidoError.prototype);
    }
}
// Função para verificar a validade do email
function verificarMail(email) {
    // Verifica se o email contém o caractere '@'
    if (!email.includes('@')) {
        // Lança o erro personalizado caso o email seja inválido
        throw new MailInvalidoError('Email inválido: O email deve conter o caractere "@"');
    }
    console.log('Email válido!');
}
// Exemplo de uso da função
try {
    verificarMail('usuario.com'); // Não contém '@', então lançará o erro
}
catch (error) {
    // Verifica se o erro é uma instância de Error e se possui a propriedade 'message'
    if (error instanceof Error) {
        if (error instanceof MailInvalidoError) {
            console.error(error.message); // Deve imprimir "Email inválido: O email deve conter o caractere '@'"
        }
        else {
            console.error('Erro desconhecido:', error.message);
        }
    }
    else {
        console.error('Erro desconhecido:', error);
    }
}

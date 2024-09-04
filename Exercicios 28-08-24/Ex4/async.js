"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Função assíncrona para buscar dados da API
function buscarDadosdaAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // Simula uma chamada à API com um atraso usando setTimeout
            setTimeout(() => {
                const sucesso = Math.random() > 0.5; // Simula 50% de chance de sucesso
                if (sucesso) {
                    resolve('Dados recebidos da API');
                }
                else {
                    reject(new Error('Falha ao buscar dados da API'));
                }
            }, 2000); // Simula um atraso de 2 segundos
        });
    });
}
// Função assíncrona para executar a busca de dados
function executarusca() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield buscarDadosdaAPI(); // Aguarda a resposta da API
            console.log(dados); // Exibe os dados recebidos
        }
        catch (error) {
            // Captura e exibe erros
            if (error instanceof Error) {
                console.error('Erro ao buscar dados:', error.message);
            }
            else {
                console.error('Erro desconhecido:', error);
            }
        }
    });
}
// Executa a busca de dados
executarusca();

"use strict";
// Função que recebe um Produto e uma FormaPagamento
function exibirProdutoComPagamento(produto, pagamento) {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
}
// Exemplo de uso
const produtoExemplo = { nome: 'Laranja', preco: 72, categoria: 'Frutinhas' };
const formaPagamentoExemplo = 'pix';
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));

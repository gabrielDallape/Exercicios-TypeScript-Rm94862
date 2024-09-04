"use strict";
function exibirInformacoes(livro) {
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`;
}
let livro1 = {
    titulo: "Harry Potter",
    autor: "JK Rowling",
    anoPublicacao: 1997
};
console.log(exibirInformacoes(livro1));

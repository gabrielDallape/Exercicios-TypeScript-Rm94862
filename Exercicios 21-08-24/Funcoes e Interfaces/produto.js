function exibirInformacoes(livro) {
    return "O livro ".concat(livro.titulo, " foi escrito por ").concat(livro.autor, " e publicado em ").concat(livro.anoPublicacao, ".");
}
var livro1 = {
    titulo: "Harry Potter",
    autor: "JK Rowling",
    anoPublicacao: 1997
};
console.log(exibirInformacoes(livro1));

interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function exibirInformacoes(livro: Livro): string {
    return `O livro ${livro.titulo} foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`
}

let livro1: Livro = {
    titulo: "Harry Potter",
    autor: "JK Rowling",
    anoPublicacao: 1997
}

console.log(exibirInformacoes(livro1))
/*
     Desafio (sem resposta):
    Crie um array chamado livros, contendo 3 objetos.
    Cada objeto deve ter:

        - titulo
        - autor
        - ano
        - disponivel (booleano: true ou false)

    Mostre no console:

        - O título do segundo livro
        - Todos os livros disponíveis
        - Um novo array contendo somente título e autor de cada livro (use .map())
*/

let livros = [
    {titulo: "Harry Potter 1", autor: "Muie Lá", ano: 1990, disponivel: true},
    {titulo: "Harry Potter 2", autor: "Muie Lá", ano: 1991, disponivel: false},
    {titulo: "Harry Potter 3", autor: "Muie Lá", ano: 1992, disponivel: true}
];

console.log(livros[1].titulo); // Segundo livro

let disponiveis = livros.filter(l => l.disponivel);
console.log(disponiveis); // Apenas os disponíveis

let tituloeautor = livros.map(l => {
  return {
    titulo: l.titulo,
    autor: l.autor
  };
});
console.log(tituloeautor);

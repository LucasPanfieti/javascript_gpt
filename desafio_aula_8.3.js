/*
  Enunciado
    Crie um array chamado produtos, com pelo menos 4 objetos, cada um contendo:

      nome (string)
      preco (número)
      disponivel (boolean)

    Filtre apenas os produtos disponíveis

    Use .map() para transformar esses produtos em um novo array de objetos com:

      nome em letras maiúsculas
      preco com 10% de desconto

    Mostre no console:

      O array original
      O array filtrado com desconto e nome em maiúsculo
    */

// 1
let produtos = [
  {nome: 'Notebook', preco: 2500, disponivel: true},
  {nome: 'Camera', preco: 600, disponivel: false},
  {nome: 'Mouse', preco: 150, disponivel: true}
]

// 2
let disponiveis = produtos.filter(p => p.disponivel)
console.log(disponiveis); // Apenas os disponíveis

// 3
let novo = produtos.map(p => {
  return {
    nome: p.nome.toUpperCase(),
    preco: p.preco - 0.9
  };
});

// 4
console.log(produtos)
console.log(novo)
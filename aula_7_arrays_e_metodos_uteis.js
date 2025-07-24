//🧠 Aula 7: Arrays (Listas) e Métodos Úteis

/*
    O que é um array?
        Um array é uma lista ordenada de valores, que podem ser:

            - números
            - strings
            - objetos
            - até outras funções ou arrays
*/

    let frutas = ["maçã", "banana", "laranja"];

    //Cada item tem um índice (posição) começando em 0:
        frutas[0] = "maçã"
        frutas[1] = "banana"
        frutas[2] = "laranja"

    //Criando arrays
        let numeros = [1, 2, 3, 4, 5];
        let nomes = ["Lucas", "Maria", "João"];

    //Acessando valores
        console.log(nomes[0]); // Lucas
        console.log(numeros[2]); // 3

    //Alterando valores
        nomes[1] = "Carla";
        console.log(nomes); // ["Lucas", "Carla", "João"]

//Métodos úteis de arrays
    //Esses são muito usados em React, principalmente o map():

    /*
    | Método        | O que faz                               | Exemplo rápido                          |
    | ------------- | --------------------------------------- | --------------------------------------- |
    | `.length`     | Tamanho do array                        | `nomes.length`                          |
    | `.push()`     | Adiciona no final                       | `nomes.push("Paulo")`                   |
    | `.pop()`      | Remove o último item                    | `nomes.pop()`                           |
    | `.shift()`    | Remove o primeiro item                  | `nomes.shift()`                         |
    | `.unshift()`  | Adiciona no início                      | `nomes.unshift("Ana")`                  |
    | `.includes()` | Verifica se contém um valor             | `nomes.includes("Lucas")`               |
    | `.indexOf()`  | Retorna a posição de um valor           | `nomes.indexOf("João")`                 |
    | `.join()`     | Junta os itens em uma string            | `nomes.join(", ")`                      |
    | `.slice()`    | Retorna uma parte do array              | `nomes.slice(0, 2)`                     |
    | `.splice()`   | Remove ou substitui elementos           | `nomes.splice(1, 1, "Roberta")`         |
    | `.map()`      | Cria um novo array com base no original | `nomes.map(nome => nome.toUpperCase())` |
    */

    
let numeros2 = [1, 2, 3];
let dobrados = numeros2.map(n => n * 2);
console.log(dobrados); // [2, 4, 6]

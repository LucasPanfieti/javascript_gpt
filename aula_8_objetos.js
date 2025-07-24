//Aula 8: Objetos em JavaScript

    //O que é um objeto?
        //Um objeto é uma estrutura que guarda informações em pares:
        //chave: valor
        let pessoa = {
            nome: "Lucas",
            idade: 22,
            cidade: "São Paulo"
        };

    //Acessando dados do objeto
        console.log(pessoa.nome);   // Lucas
        console.log(pessoa["idade"]); // 22

    //Alterando valores
        pessoa.idade = 23;
        pessoa["cidade"] = "Rio de Janeiro";


    //Adicionando novas propriedades
        pessoa.profissao = "Desenvolvedor";

    //Excluindo uma propriedade
        delete pessoa.cidade;

    //Objetos dentro de arrays (muito usado em React!)
        let usuarios = [
        { nome: "Lucas", idade: 22 },
        { nome: "Maria", idade: 25 },
        { nome: "João", idade: 30 }
        ];

        console.log(usuarios[1].nome); // Maria
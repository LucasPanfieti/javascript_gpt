// Aula 9: Desestruturação + Spread/Rest

    //1. Desestruturação de Objetos
        //Permite extrair propriedades de um objeto e guardar em variáveis de forma simples.
            let pessoa = {
            nome: "Lucas",
            idade: 23,
            cidade: "São Paulo"
            }

            // Desestruturação:
            const { nome, idade } = pessoa

            console.log(nome) // Lucas
            console.log(idade) // 22
            //É como dizer: "Crie uma variável nome e outra idade, com os valores vindos de pessoa".

    //2. Desestruturação de Arrays
        //Funciona por posição:
            let frutas = ["maçã", "banana", "laranja"]

            const [primeira, segunda] = frutas

            console.log(primeira) // maçã
            console.log(segunda)  // banana

    //Operadores Spread (...) e Rest (...)
    //O símbolo é o mesmo (...), mas o significado depende do contexto.

    // 3. Spread – "espalha" os dados
        //Útil para copiar ou combinar arrays e objetos.
            let numeros = [1, 2, 3];
            let novosNumeros = [...numeros, 4, 5];

            console.log(novosNumeros); // [1, 2, 3, 4, 5]

        //Em objetos:    
            let pessoa1 = { nome: "Lucas", idade: 22 };
            let novaPessoa = { ...pessoa1, cidade: "SP" };

            console.log(novaPessoa); 
            // { nome: "Lucas", idade: 22, cidade: "SP" }

    //4. Rest – "junta o resto"
        //Usado em parâmetros de função ou desestruturação.
            function somar(...numeros) {
            return numeros.reduce((total, n) => total + n, 0);
            }

            console.log(somar(1, 2, 3, 4)); // 10


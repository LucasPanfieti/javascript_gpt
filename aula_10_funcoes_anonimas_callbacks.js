// Aula 10 – Funções Anônimas e Callbacks
    //O que é uma função anônima?
        //É uma função sem nome. Geralmente é atribuída a uma variável ou passada como argumento.

        const saudacao = function () {
        console.log("Olá!");
        };

        saudacao(); // Chama a função

    /*
        //Diferença de comportamento
            // Funciona:
            teste1(); 

            function teste1() {
            console.log("OK");
            }

            // Erro:
            teste2(); 

            const teste2 = function() {
            console.log("Erro");
            };
    */

    //O que é uma função callback?
        //Callback é uma função que é passada como argumento para outra função e executada em algum momento depois.
        //Exemplo:
            function executar(funcao) {
            console.log("Início")
            funcao(); // Aqui executa a função recebida
            console.log("Fim")
            }

            executar(function () {
            console.log("Executando o callback!")
            });

        //Exemplo com .forEach() — callback real
            let nomes = ["Lucas", "Maria", "João"]

            nomes.forEach(function(nome) {
            console.log("Olá, " + nome)
            })
            //Aqui, a função que imprime cada nome é um callback passado para o forEach.

        //Callback com função arrow
            nomes.forEach((nome) => console.log("Oi, " + nome))
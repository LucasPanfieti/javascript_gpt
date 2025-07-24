/*
    O que é uma função?
        Função é um bloco de código reutilizável. Ela serve para organizar lógica, evitar repetição e modularizar seu código.
*/
    // 1. Criando e chamando uma função
    
        function saudacao() {
        console.log("Olá, Lucas!");
        }

        saudacao(); // Chamada da função

    // 2. Função com parâmetros
        // Parâmetros permitem tornar a função dinâmica.

        function saudacao2(nome) {
        console.log(`Olá, ${nome}!`);
        }

        saudacao2("Lucas");
        saudacao2("Maria");

    // 3. Função com retorno (return)
        //Permite guardar o resultado da função em uma variável:

        function soma(a, b) {
        return a + b;
        }

        let resultado = soma(5, 3);
        console.log("Resultado:", resultado); // 8

    // 4. Função arrow (=>) – muito usada no React

        const dobrar = (numero) => {
        return numero * 2;
        }

        console.log(dobrar(4)); // 8

        //Versão reduzida para funções de uma linha só:

            const dobrar2 = numero => numero * 2;

    // Escopo de variáveis
        //Escopo global: fora de qualquer função

        //Escopo local: dentro de uma função (ou bloco {})

        let nome = "Lucas"; // global

        function mostrarNome() {
        let sobrenome = "Silva"; // local
        console.log(nome + " " + sobrenome);
        }

        mostrarNome();
        // console.log(sobrenome); // erro — fora do escopo

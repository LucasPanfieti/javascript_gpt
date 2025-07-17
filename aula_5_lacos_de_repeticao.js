/*
Aula 5: Laços de Repetição (`for`, `while`, `do...while`)

    1. `for` – o mais comum

        Usado quando você sabe quantas vezes quer repetir algo.
        
            for (let i = 0; i < 5; i++) {
                console.log("Repetição número:", i);
            }
        
        O que acontece aqui:

            * `let i = 0`: começa com i = 0
            * `i < 5`: enquanto i for menor que 5, repete
            * `i++`: incrementa 1 a cada volta

        Resultado:

            Repetição número: 0
            Repetição número: 1
            Repetição número: 2
            Repetição número: 3
            Repetição número: 4


    2. `while` – enquanto a condição for verdadeira

        Usado quando você **não sabe o fim exato** da repetição.

            let i = 0;
            while (i < 3) {
                console.log("while rodando:", i);
                i++;
            }


    3. `do...while` – executa pelo menos uma vez

        Mesmo que a condição seja falsa, o código roda **uma vez** antes de checar.

            let i = 0;
            do {
                console.log("do...while rodando:", i);
                i++;
            } while (i < 2);


    ## Teste simples

        Coloque no `script.js` e veja no console:
*/
            for (let i = 1; i <= 5; i++) {
            console.log("Número:", i);
            }


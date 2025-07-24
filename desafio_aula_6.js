/*
    Desafio (sem resposta)
        Crie uma função chamada verificarIdade que:

            1. Receba um parâmetro idade

            2. Retorne:

                "Maior de idade" se for 18 ou mais

                "Menor de idade" se for menor que 18

        Depois, chame a função passando a idade 17 e mostre o retorno com console.log().
*/

/*
    function verificarIdade (idade) {
        if (idade >= 18) {
            return"Maior de idade"
        } else {
            return"Menor de idade"
        }
    }
*/

/*
    const verificarIdade = (idade) => {
        if (idade >= 18) {
            return"Maior de idade"
        } else {
            return"Menor de idade"
        }
    }
*/

    const verificarIdade = idade => idade >= 18 ? "Maior de idade" : "Menor de idade" //operador ternario

    console.log(verificarIdade(17))
/*
    Desafio (sem resposta)
        Crie um objeto carro com as chaves:

            marca, modelo, ano, cor

        Use desestruturação para extrair modelo e ano

        Crie um novo objeto chamado carroAtualizado, usando o operador spread para copiar carro e modificar a cor para "preto".

        Crie uma função chamada exibirDados que recebe qualquer quantidade de parâmetros com ... (rest) e imprime cada um no console.
*/

//1.
    let carro = {
        marca: 'Fiat',
        modelo: 'Uno',
        ano: 2011,
        cor: 'Branco'
    }

//2.
    const { modelo, ano } = carro
    console.log(modelo)
    console.log(ano)

//3.
    let carroAtualizado = { ...carro, cor: "Preto" };

    console.log(carroAtualizado);

//4.
    function exibirDados(...dados) {
    return dados.join(', ');
    }

    console.log(exibirDados("Fiat", "Uno", 2011, "Preto"));


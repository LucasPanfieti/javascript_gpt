/*
    1. if e else
    A estrutura mais básica de decisão é o if.
*/
        let idade = 20;

        if (idade >= 18) {
            console.log("Você é maior de idade.");
        } else {
            console.log("Você é menor de idade.");
        }
/*
    Se a condição for verdadeira, o código dentro do if é executado.
    Se for falsa, executa o else.
*/

/*
    2. else if
    Serve para testar várias condições em sequência.
*/
        let nota = 7;

        if (nota >= 9) {
            console.log("Excelente!");
        } else if (nota >= 7) {
            console.log("Bom!");
        } else {
            console.log("Precisa melhorar.");
        }


/*
    3. Bloco switch
    Ideal quando você precisa testar um valor fixo, como opções ou categorias.
*/
        let cor = "azul";        

        switch (cor) {
            case "vermelho":
                console.log("Cor quente");
                break;
            case "azul":
                console.log("Cor fria");
                break;
            case "verde":
                console.log("Cor neutra");
                break;
            default:
                console.log("Cor desconhecida");
            }

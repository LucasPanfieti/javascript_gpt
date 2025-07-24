/*
    Desafio (sem resposta):

            Mostre no console: "Carregando..."

            Use setTimeout() para, após 3 segundos, mostrar: "Pronto!"

            Depois disso, mostre: "Processo concluído."

        Mas atenção: a ordem deve parecer que o JS esperou, mesmo sem await.

        Dica: console.log() vem antes e depois do setTimeout(), pra ver a ordem real.

        Faz o desafio aí e me manda — depois a gente avança pro próximo passo no mundo assíncrono!
*/

console.log("Carregando...")

setTimeout(function () {
console.log("Pronto!")
console.log("Processo concluído!")
}, 3000)
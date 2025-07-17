/*
Desafio
Crie um programa que:

Tenha uma variável nota (de 0 a 10)

Use if, else if e else para exibir:

    Se nota for 9 ou mais: "Excelente"

    Se nota for entre 7 e 8.9: "Bom"

    Se nota for entre 5 e 6.9: "Razoável"

    Senão: "Reprovado"

Use console.log() para mostrar o resultado.
*/

let nota = 0

if(nota >= 9) {
    console.log('Excelente')
} else if(7 <= nota){
    console.log('Bom')
} else if(5 <= nota){
    console.log('Razoável')
} else {
    console.log('Reprovado')
}
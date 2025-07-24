let nomes = ['Lucas', 'Giulia', 'Luan', 'Alex', 'Cris']

console.log(nomes[0])
console.log(nomes[4])
console.log(nomes.length)

nomes.push("Samuel")

let nomesMaiusculos = nomes.map(nome => nome.toUpperCase())

console.log(nomesMaiusculos)

console.log(nomes[nomes.length - 1]); // Samuel

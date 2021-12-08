console.log(`Trabalhando com listas`)

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

// console.log("Destinos possíveis: ")
// console.log(salvador, saoPaulo, rioDeJaneiro)

//listas/arrays
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)

listaDeDestinos.push(`Santa Catarina`) //push adiciona itens no array

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

//aula07
//splice remove itens do array de acordo com a posição e qtd passada
listaDeDestinos.splice(1, 1) //lembrando que o vetor começa a posição de 0
console.log(listaDeDestinos)
console.log(listaDeDestinos[1], listaDeDestinos[0]) //exibe só a posição requirida
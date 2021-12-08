console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 15
const estaAcompanhada = true


console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1, 1)
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado")
    listaDeDestinos.splice(1, 1)
} else {
    console.log("Não é maior de idade e não vender")
}

console.log(listaDeDestinos)

//operadores booleans
// console.log(idadeComprador > 18) //maior que 
// console.log(idadeComprador < 18) //menor que
// console.log(idadeComprador <= 18) //menor igual que
// console.log(idadeComprador >= 18) //maior igual que 
// console.log(idadeComprador == 18) //igual

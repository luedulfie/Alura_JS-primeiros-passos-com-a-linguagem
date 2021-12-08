console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 20
const estaAcompanhada = true
const temPassagemComprada = true

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhada == true) { // || é referente ao 'ou'
    console.log("Boa viagem!!!")
    listaDeDestinos.splice(1, 1)
} else {
    console.log("Não é maior de idade e não vender")
}

console.log("Embarque: \n \n")
if(idadeComprador && temPassagemComprada) { // && é ferente ao 'e'
    console.log("Boa viagem!!!")
} else {
    console.log("Não pode embarcar!")
}

console.log(listaDeDestinos)

console.log("Conversão de tipos")

console.log("ano" + 2020) //concatenação por ser texto + numero
console.log("2" + "2") //concatenação por ser texto + texto

console.log(parseInt("2") + parseInt("2")) //parseInt realiza a conversão do texto para num
//com os dois como parseInt é somado os valores -- conversão explicita

console.log( "10" / "2" ) //com divisão o js faz a conversão de maneira implicita
console.log( "7" / "2" ) //com divisão o js faz a conversão de maneira implicita
console.log( "Lucas" / "2" ) //NaN - Not a Number -- como possui um texto não é possivel converter

console.log(6.5) //Para num quebrados, é preciso usar o ponto 
console.log(6,5) //Se usado a virgula, é identificado como um espaço, uma função diferente
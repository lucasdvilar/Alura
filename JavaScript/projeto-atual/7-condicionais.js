console.log(`Trabalhando com condicionais.`)

const listaDestinos = new Array(
    "Rio de Janeiro",
    "São Paulo",
    "Salvador"
)

const acompanhada = true
const idade = 21
const passagem = true

console.log("Destinos possíveis:")
console.log(listaDestinos)

if (idade >= 18 || acompanhada) { //condição para poder comprar - if = "se", || = "ou"
    console.log("Boa viagem!")
    listaDestinos.splice(1, 1)
}
else {
    console.log("Comprador menor de idade e não posso vender.")
}

console.log("Embarque: \n\n") //\n quebra linha
if (idade >= 18 && passagem){ //&& = "e"
    console.log("Boa viagem!")
}
else{
    console.log("Não pode embarcar!")
}

console.log(listaDestinos)
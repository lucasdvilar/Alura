console.log(`Trabalhando com listas.`)

const listaDestinos = new Array( //cria uma lista
    "Rio de Janeiro",
    "São Paulo",
    "Salvador"
)

listaDestinos.push("Curitiba") //adiciona um item na lista
console.log("Destinos possíveis:")
console.log(listaDestinos)

listaDestinos.splice(1,1) //remove
console.log(listaDestinos)

console.log(listaDestinos[1], listaDestinos[0]) //acessa um elemento específico da lista
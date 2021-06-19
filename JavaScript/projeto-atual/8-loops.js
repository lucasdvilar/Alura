console.log(`\nTrabalhando com loops.`)

const listaDestinos = new Array(
    "Rio de Janeiro",
    "São Paulo",
    "Salvador"
)
const destino = "São Carlos"

let contador = 0
let destinoExiste = false

while(contador < 3){
    if(listaDestinos[contador] == destino){
        destinoExiste = true
        break 
    }
    contador += 1;
}
console.log(`Destino existe: ${destinoExiste}`)

for(let cont = 0; cont < 3; cont++){ //for(inicio, condição, incremento); cont++ = cont += 1
    if(listaDestinos[contador] == destino){
        destinoExiste = true
    }
} 


//usando o debug
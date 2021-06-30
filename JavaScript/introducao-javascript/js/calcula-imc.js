var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll('.paciente') //seleciona todos

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector('.info-peso') //seleciona (no primeiro-paciente) a class info-peso
  var peso = tdPeso.textContent //devolve apenas o conteúdo

  var tdAltura = paciente.querySelector('.info-altura')
  var altura = tdAltura.textContent

  var tdImc = paciente.querySelector('.info-imc')

  var pesoValido = true
  var alturaValida = true

  if (peso <= 0 || peso >= 1000) {
    console.log('Peso inválido!')
    pesoValido = false
    tdImc.textContent = 'Peso inválido!'
    paciente.classList.add('paciente-invalido')
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log('Altura inválida!')
    alturaValida = false
    tdImc.textContent = 'Altura inválida!'
    paciente.classList.add('paciente-invalido')
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  }
}

function calculaImc(peso, altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)
}

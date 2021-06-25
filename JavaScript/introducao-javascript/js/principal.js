var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var paciente = document.querySelector('#primeiro-paciente') //seleciona (no document) o id primeiro-paciente

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
}

if (altura <= 0 || altura >= 3.0) {
  console.log('Altura inválida!')
  alturaValida = false
  tdImc.textContent = 'Altura inválida!'
}

if (pesoValido && alturaValida) {
  var imc = peso / (altura * altura)
  tdImc.textContent = imc
}

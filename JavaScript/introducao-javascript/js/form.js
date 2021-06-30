var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  // extraindo informações do paciente pelo form
  var paciente = infoDoForm(form)
  // cria a tr e a td
  var pacienteTr = document.createElement('tr')

  var nomeTd = document.createElement('td')
  var pesoTd = document.createElement('td')
  var alturaTd = document.createElement('td')
  var gorduraTd = document.createElement('td')
  var imcTd = document.createElement('td')

  nomeTd.textContent = nome
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura
  imcTd.textContent = calculaImc(peso, altura)

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)
})

function infoDoForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente
}

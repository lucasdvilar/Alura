const criarTarefa = function(evento){
  evento.preventDefault()

  const lista = document.querySelector("[data-list]")
  const input = document.querySelector("[data-form-input]")
  const valor = input.value

  const tarefa = document.createElement("li")
  tarefa.classList.add("task")
  const conteudo = `<p class="content">${valor}</p>` //rever template string

  tarefa.innerHTML = conteudo
  lista.appendChild(tarefa)
  input.value = ""
}

const novaTarefa = document.querySelector("[data-form-button")

novaTarefa.addEventListener("click", criarTarefa)

const BotaoConclui = function(){
  const botaoConclui = document.createElement("button")
  botaoConclui.addEventListener("click", function(){
    console.log("fui clicado")
  })
  return botaoConclui
}
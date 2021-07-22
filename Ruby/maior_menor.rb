def boasVindas
  puts "Hello, world!"
  puts "Bem vindo ao jogo de adivinhação"
  puts "Qual é seu nome?"
  name = gets.strip
  puts "O jogo vai começar, #{name}"
  name
end

def pedeDificuldade
  puts "Qual o nível de dificuldade que deseja? (1 - fácil, 5 - difícil)"
  dificuldade = gets.to_i
end

def sorteiaNum(dificuldade)
  case dificuldade
  when 1
    maximo = 30
  when 2
    maximo = 60
  when 3
    maximo = 100
  when 4
    maximo = 150
  else
    maximo = 200
  end
  
  puts "Escolha um num entre 1 e #{maximo}"
  sorteado = rand(maximo) #ruby não obriga uso do return; não é possível acessar essa variável fora da função (variável local)
end

def pedeNumero(tentativa)
  puts "\n\n\n"
  puts "Tentativa #{tentativa + 1}"
  chute = gets.strip
  puts "Será que acertou? Você chutou #{chute}"
  chute.to_i
end

def verificaAcerto(secretNumber, chute)
  acertou = secretNumber == chute
  if acertou
    puts "Acertou!"
    return true
  end

  maior = secretNumber > chute
  if maior
    puts "O num secreto é maior"
  else
    puts "O num secreto é menor"
  end
  return false
end

def joga(name, dificuldade)
  secretNumber = sorteiaNum dificuldade #sorteiaNum recebe o valor do que foi retornado (175) e atribui à secretNumber

pontos = 1000
limiteTentativas = 5
chutes = []
#totalChutes = 0

for tentativa in 0..(limiteTentativas - 1)
  chute = pedeNumero(tentativa) #parênteses não são necessários
  chutes << chute
  puts "Até agora você chutou #{chutes}"

  if name == "Luca"
    puts "Acertou!"
    break
  end

  pontosPerdidos = (chute - secretNumber).abs / 2.0
  pontos -= pontosPerdidos

  if verificaAcerto(secretNumber, chute)
    break #pode ficar na mesma linha do if (break if...)
  end
end

puts "O número sorteado era #{secretNumber}"
puts "Você ganhou #{pontos} pontos."
end

def querJogar
  puts "Deseja jogar novamente? (S/N)"
  escolha = gets.strip
  escolha.upcase == "S" #retorna true se for S
end

name = boasVindas
dificuldade = pedeDificuldade

loop do
  joga name, dificuldade
  if !querJogar
    break
  end
end
def boasVindas
  puts "Bem-vindo ao jogo da forca!"
  puts "Qual o seu nome?"
  nome = gets.strip
end

def escolhePalavra
  palavraSecreta = "lucas"
  puts "Palavra secreta com #{palavraSecreta.size} letras. Boa sorte!"
  palavraSecreta
end

def naoQuerJogar
  puts "Deseja jogar novamente? (S/N)"
  querJogar = gets.strip
  nao = querJogar.upcase == "N"
end

def pedeChute(erros, chutes)
  puts "\n\n\n\n"
  puts "Erros até agora: #{erros}"
  puts "Chutes até agora: #{chutes}"
  puts "Entre com uma letra ou palavra"
  chute = gets.strip
end

def joga(nome)
  palavraSecreta = escolhePalavra

  erros = 0
  chutes = []
  pontos = 0

  while erros < 5
    chute = pedeChute chutes, erros
    chutes << chute

    if chute.size == 1
      letraProcurada = chute[0]
      qtdLetras = 0
      for i in 0..(palavraSecreta.size - 1)
        if palavraSecreta[i] == letraProcurada
          qtdLetras += 1
        end
      end
      if qtdLetras == 0
        puts "Letra não encontrada."
        erros += 1 
      else
        puts "Letra encontrada #{qtdLetras} vezes."
      end
    else
      if chute == palavraSecreta
        puts "Acertou!"
        pontos += 100
        break
      else
        puts "Errou!"
        pontos -= 30
        erros += 1
      end
    end
  end

  puts "Você ganhou #{pontos} até agora."
end

nome = boasVindas

loop do
  joga nome
  if naoQuerJogar
    break
  end
end
puts "Hello, world!"
puts "Bem vindo ao jogo de adivinhação"

puts "Qual é seu nome?"
name = gets
puts "O jogo vai começar, " + name

puts "Escolha um num entre 1 e 200"
secretNumber = 175

puts "Tentativa 1"
chute = gets
puts "Será que acertou? Você chutou " + chute
puts chute.to_i == secretNumber
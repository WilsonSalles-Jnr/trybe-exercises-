const input = require('readline-sync');


const sorteio = () => {
  let numero = Math.round(Math.random()*10);
  console.log(numero === input.questionInt('Digite um número de 1 a 10: ')
  ? 'Parabéns, número correto!'
  : `Opa, não foi dessa vez. O número era ${numero}`)

  return input.question("Quer jogar novamente? (y/n) ") === "y"
  && sorteio()

}
sorteio()
const input = require('readline-sync');


const sorteio = (number) => {
  return number === input.questionInt('Digite um número de 1 a 10: ') ? 'Parabéns, número correto!' : `Opa, não foi dessa vez. O número era ${number}`
}
console.log(sorteio(Math.round(Math.random()*10)))
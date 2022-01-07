const question = require('readline-sync')

const calculoVelocidade = (distancia, tempo) => {
  return distancia / tempo
}

const distancia = question.questionInt('Qual a distancia em metros? ');
const tempo = question.questionInt('Qual o tempo em segundos? ');

console.log(calculoVelocidade(distancia,tempo));
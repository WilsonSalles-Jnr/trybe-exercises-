const imc = require('./imc');
const readlineSync = require('readline-sync');

const peso = readlineSync.question('Qual seu peso? ');
const altura = readlineSync.question('Qual sua altura? ')

console.log(imc(Number(peso),Number(altura)));
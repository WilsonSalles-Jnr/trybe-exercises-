const {imc, result} = require('./imc');
const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat('Qual seu peso? ');
const altura = readlineSync.questionFloat('Qual sua altura? ')


console.log(`Seu IMC é de ${imc(peso,altura)}, situação: ${result(imc(peso,altura))}`);
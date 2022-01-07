const readlineSync = require('readline-sync');

const imc = () => {
  return (peso / Math.pow(altura, 2)).toFixed(1);
}
const result = (imc) => {
  console.log("Tabela IMC:")

  console.table({
    "Abaixo de 18,5": "Abaixo do peso (magreza)",
    "Entre 18,5 e 24,9": "Peso normal",
    "Entre 25,0 e 29,9": "Acima do peso (sobrepeso)",
    "Entre 30,0 e 34,9": "Obesidade grau I",
    "Entre 35,0 e 39,9": "Obesidade grau II",
    "40,0 e acima": "Obesidade graus III e IV",
  })
  if(imc < 18.5) {return "Abaixo do peso (magreza)"};
  if(imc >= 18.5 && imc <= 24.9) {return "Peso normal"}
  if(imc >= 25 && imc <= 29.9) {return "Acima do peso (sobrepeso)"}
  if(imc >= 30 && imc <= 34.9) {return "Obesidade grau I"}
  if(imc >= 35  && imc < 39.9) {return "Obesidade grau II"}
  if(imc >=  40) {return "Obesidade graus III e IV"}
}

const peso = readlineSync.questionFloat('Qual seu peso? ');
const altura = readlineSync.questionFloat('Qual sua altura? ')

const resultado = () => {
  return console.log(`Seu IMC é de ${imc(peso,altura)}, situação: ${result(imc(peso,altura))}`);

}

resultado();
module.exports = resultado;
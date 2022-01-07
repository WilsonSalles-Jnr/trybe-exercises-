const input = require('readline-sync');

console.table({
  1: "calculo imc",
  2: "calcular velocidade",
  3: "sorteio",
})

let opcao = input.questionFloat("Selecione um script ");

const seletor = (select) => {

  switch(select) {
    case 1: require('./imc')
    break;
    case 2: require('./velocidade')
    break;
    case 3: require('./sorteio')
    break;
    default: console.log('opcao invalida')
  }
}

seletor(opcao)
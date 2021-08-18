
function compareTrue(bol1, bol2) {
  if (bol1 === true && bol2 === true) {
    return true;
  }
  return false;
}


function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

function splitSentence(frase) {
  let arr = [];
  let palavra = '';
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] === ' ') {
      arr.push(palavra);
      palavra = '';
    }
    if (frase[i] !== ' ') {
      palavra += frase[i];
    }
  }
  arr.push(palavra);
  return arr;
}

function concatName(arr) {
  let primeiraPalavra = arr[0];
  let ultimaPalavra = '';
  for (let i = 0; i < arr.length; i += 1) {
    ultimaPalavra = arr[i];
  }
  let ultimaPrimeira = `${ultimaPalavra}, ${primeiraPalavra}`;
  return ultimaPrimeira;
}


function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}
function encode(string) {
    let code = [1, 2, 3, 4, 5];
    let letra = ['a', 'e', 'i', 'o', 'u'];
    let letraFinder = '';
    let deploy = '';
    for (let i = 0; i < string.length; i += 1) {
      letraFinder = string[i];
      let indexLetra = letra.indexOf(string[i]);
      if (string[i] === letra[indexLetra]) {
        let index = letra.indexOf(letraFinder);
        deploy += code[index];
      } else if (string[i] !== letra[indexLetra]) {
        deploy += string[i];
      }
    }
    return (deploy);
}
function decode(string) {
    let letra = ['1', '2', '3', '4', '5'];
    let code = ['a', 'e', 'i', 'o', 'u'];
    let deploy = '';
    for (let i = 0; i < string.length; i += 1) {
      let indexLetra = letra.indexOf(string[i]);
      if (string[i] === letra[indexLetra]) {
        deploy += code[indexLetra];
      } else if (string[i] !== letra[indexLetra]) {
        deploy += string[i];
      }
    }
    return deploy;
  }
module.exports = {
    compareTrue,
    calcArea,
    splitSentence,
    concatName,
    footballPoints,
    encode,
    decode
}

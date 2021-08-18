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

function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  arr.sort();
  let tec = [];
  arr.forEach((cur) => {
    tec.push({tech: cur, name: name})
  });
  arr = tec
  return arr.sort();

}

function hydrate(string) {
  let result;
  let number = string.match(/\d+/g); // fonte de consulta: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let x = 0;
  number.forEach((cur)=>{
    return x += parseInt(cur)
  })
  if (x > 2) {
    result = `${x} copos de água`;
  } else {
    result = `${x} copo de água`;
  }
  console.log(number)
  return result;
}
console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));
module.exports = {
  encode,
  decode,
  techList,
  hydrate

}
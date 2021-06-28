function palindromo(palavra) {
  let invertido = '';
  for (let i = 0; i < palavra.length; i += 1) {
    count = 1 + i;
    invertido += palavra[palavra.length - count]
  }
  if (palavra == invertido) {
    console.log('True');
    return true;
  } else {
    console.log('False');
    return false;
  }
}

palindromo('banana');
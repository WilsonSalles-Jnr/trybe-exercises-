function funcao(arr) {
  let maior = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  console.log(arr.indexOf(maior));
  return arr.indexOf(maior);

}
funcao([2, 4, 6, 7, 10, 0, -3]);
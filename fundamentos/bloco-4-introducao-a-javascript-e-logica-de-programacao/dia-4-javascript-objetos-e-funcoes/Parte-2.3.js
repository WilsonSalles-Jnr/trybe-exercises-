function funcao(arr) {
  let menor = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < menor) {
      menor = arr[i];
    }
  }
  console.log(arr.indexOf(menor));
  return arr.indexOf(menor);

}
funcao([2, 4, 6, 7, 10, 0, -3]);
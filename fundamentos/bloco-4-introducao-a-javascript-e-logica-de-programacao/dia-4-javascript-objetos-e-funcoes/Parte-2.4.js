function funcao(arr) {
    let index = 0;
    let letras = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].length > letras) {
        letras = arr[i].length;
        index += 1
      }
    }
    console.log(arr[index]);
    return arr[index];
  
  }
  funcao(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
function funcao(arr) {
    let maiorNome = arr[0]

    for(let i in arr){
      if(maiorNome.length<arr[i].length){
        maiorNome = arr[i]
      }
    }
    console.log(maiorNome);
  }
  funcao(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

  //Utilizei o gabarito para entender este exercício, aprendi de maneira satisfatória após ver o vídeo
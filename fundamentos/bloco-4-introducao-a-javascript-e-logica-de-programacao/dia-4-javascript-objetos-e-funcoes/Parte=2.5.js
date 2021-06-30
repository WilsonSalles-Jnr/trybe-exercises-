function qualRepete(arr){
    let contNumber = 0;
    let repetido = 0;
    let index = 0;

    for(let i in arr){
        let numeroVerificado = arr[i]
        for(let j in arr){
            if(numeroVerificado === arr[j]){
                contNumber += 1
            }
            if(contNumber>repetido){
                repetido = contNumber;
                index = numeroVerificado
            }
            contNumber = 0;
        }
    }
    console.log(index);
}

qualRepete([2, 3, 2, 5, 8, 2, 3, 8, 8, 8, 8])
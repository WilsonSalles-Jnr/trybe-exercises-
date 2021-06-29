function soma(n){
    let soma = 0
    for(let i=0;i<n;i+=1){
        soma += n-i
    }
    console.log(soma);
    return soma;
}

soma(5)
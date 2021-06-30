function convert(string){
    let arrLetras = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    let arrNumeros = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let arrIndex = 0;
    let checkDuo = string[0]+string[1];
    let checkFirst = string[0];
    for(let i =0;i<string.length;i+=1){
    }
    for(let j =0;j<arrLetras.length;j+=1){
        if(checkDuo===arrLetras[j]){
            arrIndex = j;
        }
    }
    console.log(arrNumeros[arrIndex])
}
convert('XXX');
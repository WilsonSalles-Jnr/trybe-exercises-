//exercicio 10:
let valorDeVenda = 8;
let produto = 5;
let montanteDeVenda = 1000;
const valorDeCusto = produto *1.2;
const lucro = valorDeVenda - valorDeCusto;

if(valorDeVenda<0 || produto<0){
    console.log('Error!')
}else{
    console.log('Seu lucro foi de: '+lucro*montanteDeVenda);
}
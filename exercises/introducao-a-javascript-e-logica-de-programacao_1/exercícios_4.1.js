//exercicio 1:
let a = 5
let b = 6
//1:Adição
let soma = a + b;
console.log(soma);
//1:Subtração
let subtracao = a - b;
console.log(subtracao);
//1:Multiplicação
let multiplicacao = a * b;
console.log(multiplicacao);
//1:Divisão
let divisao = a / b;
console.log(divisao);
//1:Modulo
let modulo = a % b;
console.log(modulo);

//exercicio 2:
let maiorA = 10;
let maiorB = 200;
if(maiorA>maiorB){
    console.log(maiorA);
}
else{
    console.log(maiorB);
}

//exercício 3:
let trioA = 9;
let trioB = 6;
let trioC = 7;

if(trioA>trioB && trioA>trioC){
    console.log(trioA);
}else if(trioB>trioC){
    console.log(trioB);
}
else{
    console.log(trioC);
}

//exercicio 4:
let positivo = -4;
if(positivo>0){
    console.log('positive');
}
else if(positivo<0){
    console.log('negative');
}
else{
    console.log('zero');
}

//exercicio 5:
let angleA = -10;
let angleB = 60;
let angleC = 45;

let somaAngulo = angleA + angleB + angleC;
let triangulo;

if(angleA < 0 || angleB < 0 || angleC < 0 || somaAngulo>180){
    if(somaAngulo>180){
        triangulo = false;
        console.log('Fatal error! The sum of angles is more than 180º');
        console.log('triangle is '+triangulo);
    }else{
        triangulo = false;
        console.log('Fatal error! Angles is less than 0');
        console.log('triangle is '+triangulo);
    }
}else{
    triangulo = true;
    console.log('triangle is '+triangulo);
}
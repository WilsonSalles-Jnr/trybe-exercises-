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

//exercicio 6:


//exercicio 7:
let nota = 0;
if(nota >100 || nota <0){
    console.log('Error! Nota deve estar entre 0 a 100')
}else if(nota >=90){
    console.log('Nota A')
}else if(nota >=80){
    console.log('Nota B')
}else if(nota >=70){
    console.log('Nota C')
}else if(nota >=60){
    console.log('Nota D')
}else if(nota >=50){
    console.log('Nota E')
}else if(nota >=0){
    console.log('Nota F')
}

//exercicio 8:

let isParA = 1;
let isParB = 130;
let isParC = 15;

if(isParA%2==0||isParB%2==0||isParC%2==0){
    console.log(true);
}else{
    console.log(false)
}

//exercicio 9:

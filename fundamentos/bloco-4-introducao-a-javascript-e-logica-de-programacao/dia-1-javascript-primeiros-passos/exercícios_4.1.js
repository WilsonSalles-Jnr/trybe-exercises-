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

let xadrez = 'TorrE'.toLowerCase();

switch(xadrez){
    case 'piao':
        console.log(xadrez.toLowerCase()+' --> vertical');
        break;
    case 'torre':
        console.log(xadrez.toLowerCase()+' --> vertical e horizontal');
        break;
    default:
        console.log('insira um nome válido de peça de xadrez.')
}

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
let isImparA = 1;
let isImparB = 130;
let isImparC = 150;

if(isImparA%2==1||isImparB%2==1||isImparC%2==1){
    console.log(true);
}else{
    console.log(false)
}

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

//exercicio 11:
let salario = 3000;
let inss;
let ir;

//INSS
if(salario <=1556.94){
    inss = 0.08;
}else if(salario <=2594.92){
    inss = 0.09;
}else if(salario <=5189.82){
    inss = 0.11;
}else if(salario >5189.82){
    salario = salario - 570.88;
}

//IR
if(salario <=1903.98){
    ir = 0;
}else if(salario <=2826.65){
    ir = 0.075;
}else if(salario <=3751.05){
    ir = 0.15;
}else if(salario <=4664.68){
    ir = 0.225;
}else if(salario <=4664.68){
    ir = 0.275;
    salario = salario - 570.88;
}

let liquido = (salario*(1-inss))*(1-ir)

console.log('O salário é de '+ salario +' sendo descontado '+ inss + ' de INSS e '+ir+' de imposto de renda. Liquido de:'+liquido);
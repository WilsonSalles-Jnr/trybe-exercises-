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
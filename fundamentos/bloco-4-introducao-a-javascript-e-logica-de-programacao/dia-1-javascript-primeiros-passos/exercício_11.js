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
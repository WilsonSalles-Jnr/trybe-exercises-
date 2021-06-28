let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('EXERCÍCIO 1');
console.log('Bem vinda,', info.personagem)
console.log('');
console.log('EXERCÍCIO 2');
info.recorrente = 'sim';
console.log(info);
console.log('');
console.log('EXERCÍCIO 3');
for (let key in info) {
  console.log(key);
}
console.log('');
console.log('EXERCÍCIO 4');
for (let chave in info) {
  console.log(info[chave]);
}
console.log('');
console.log('EXERCÍCIO 5');
let outro = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
};
for(let fechadura in info, outro){
  console.log(info[fechadura],'e',outro[fechadura]);
}
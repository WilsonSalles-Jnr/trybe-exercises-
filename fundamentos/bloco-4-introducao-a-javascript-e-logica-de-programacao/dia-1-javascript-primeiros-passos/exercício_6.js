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
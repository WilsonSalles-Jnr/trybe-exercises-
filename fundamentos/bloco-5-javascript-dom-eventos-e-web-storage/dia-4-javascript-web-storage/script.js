const opcao = document.getElementById('opcao');
const btnclaro = document.getElementById('btn-claro')
const btndark = document.getElementById('btn-dark')
const btnsm = document.getElementById('btn-sml');
const btnmd = document.getElementById('btn-md');
const btnbg = document.getElementById('btn-bg');
const btnlinaA = document.getElementById('btn-lineA')
const btnlinaB = document.getElementById('btn-lineB')
const btnFamilyA = document.getElementById('btn-familyA')
const btnFamilyB = document.getElementById('btn-familyB')

btnclaro.addEventListener('click',claro)
btndark.addEventListener('click',escuro)
btnsm.addEventListener('click',pequeno)
btnmd.addEventListener('click',medio)
btnbg.addEventListener('click',grande)
btnlinaA.addEventListener('click',espacoA)
btnlinaB.addEventListener('click',espacoB)
btnFamilyA.addEventListener('click',arial)
btnFamilyB.addEventListener('click',times)

// localStorage.setItem('background','white')
// localStorage.setItem('color','black')
// localStorage.setItem('size','medium')
// localStorage.setItem('spacing','0em')
// localStorage.setItem('font','arial')

function claro(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black'
    localStorage.background = 'white'
    localStorage.color = 'black'
}
function escuro(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white'
    localStorage.background = 'black'
    localStorage.color = 'white'
}
function pequeno(){
    document.body.style.fontSize = 'smaller'
    localStorage.size = 'smaller'
}
function medio(){
    document.body.style.fontSize = 'medium'
    localStorage.size = 'medium'
}
function grande(){
    document.body.style.fontSize = 'larger'
    localStorage.size = 'larger'
}
function espacoA(){
    document.body.style.wordSpacing = '0em'
    localStorage.spacing = '0em'
}
function espacoB(){
    document.body.style.wordSpacing = '0.5em'
    localStorage.spacing = '0.5em'
}
function arial(){
    document.body.style.fontFamily = 'arial'
    localStorage.font = 'arial'
}
function times(){
    document.body.style.fontFamily = 'Times New Roman'
    localStorage.font = 'Times New Roman'
}
document.body.style.background = localStorage.background
document.body.style.color = localStorage.color
document.body.style.fontSize = localStorage.size
document.body.style.wordSpacing = localStorage.spacing
document.body.style.fontFamily = localStorage.font


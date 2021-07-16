
var picker = new Pikaday({ field: document.getElementById('datepicker') });

const estados = document.getElementById('estados');
const uf = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const send = document.getElementById('enviar')

const nome = document.getElementById('nome')
const email = document.getElementById('email')
const cpf = document.getElementById('cpf')
const endereco = document.getElementById('endereco')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estados')
const tipo = document.getElementsByName('tipo')
const texto = document.getElementsByTagName('textarea')[0]
const cargo = document.getElementById('cargo')
const descri = document.getElementById('descricao')
const secao = document.getElementById('dados')
const removeTudo = document.getElementById('resetar')

let datas = [nome,email,cpf,endereco,cidade,estado,tipo,texto,cargo,descri,secao]
let formul = [
    'nome: ',
    'email: ',
    'cpf: ',
    'endereco: ',
    'cidade: ',
    'estado: ',
    'tipo: ',
    'resumo: ',
    'cargo: ',
    'descricao: ',
    'dia: ',
    'mes: ',
    'ano: '
]

function addUf(){
    for (let i = 0; i < uf.length; i += 1){
        let opt = document.createElement('option');
        opt.innerText = uf[i]
        estados.appendChild(opt)
    }
}
addUf()

send.addEventListener('click',enviarForm)

function enviarForm(event){
    event.preventDefault()
    makeDiv()
    // diaCheck(dia,1,31,'dia');
    // diaCheck(mes,1,12,'mes');
    // diaCheck(ano,1900,2100,'ano');
}


// function diaCheck(tipo,x,y,string){
//     if(parseInt(tipo.value) < x || parseInt(tipo.value) > y){
//         alert('O '+string+' precisa estar entre '+x+' e '+y)
//         tipo.value = x;
//     } else if (parseInt(tipo.value) >= x && parseInt(tipo.value) <=y){
//         tipo.value = tipo.value
//     } else if (tipo.value === ""){
//         alert('insira um '+string)
//     } else {
//         tipo.value = x;
//         alert(string+' inválido, digite apenas números')
//     }
// }
function makeDiv(){
    let division = document.createElement('div')
    secao.appendChild(division)
    // for (let i = 0; i < formul.length; i += 1){
    //     let par = document.createElement('p')
    //     let div = secao.lastChild
    //     formul[i] = formul[i] + datas[i].value
    //     par.innerText = formul[i]
    //     div.appendChild(par)
    // }
    pullNome()
    pullEmail()
    pullCpf()
    pullEndereco()
    pullCidade()
    pullEstado()
    pullTipo()
    pullResumo()
    pullCargo()
    pullDescri()
    pullData()
}

function listarPar(){
    
}

function pullNome(){
    let par = document.createElement('p');
    par.innerText = 'Nome: '+ nome.value
    return secao.lastChild.appendChild(par)
}
function pullEmail(){
    let par = document.createElement('p');
    par.innerText = 'Email: '+ email.value
    return secao.lastChild.appendChild(par)
} 
function pullCpf(){
    let par = document.createElement('p');
    par.innerText = 'CPF : '+ cpf.value
    return secao.lastChild.appendChild(par)
}
function pullEndereco(){
    let par = document.createElement('p');
    par.innerText = 'Endereço: ' + endereco.value
    return secao.lastChild.appendChild(par)
}
function pullCidade(){
    let par = document.createElement('p');
    par.innerText = 'Cidade: ' + cidade.value
    return secao.lastChild.appendChild(par)
}
function pullEstado(){
    let par = document.createElement('p');
    par.innerText = 'Estado: ' + estados.value
    return secao.lastChild.appendChild(par)
}
function pullTipo(){
    let par = document.createElement('p');
    par.innerText = 'Tipo: '
    if(tipo[0].checked === true){
        par.innerText += 'Casa'
    } else {
        par.innerText += 'Apartamento'
    }
    return secao.lastChild.appendChild(par)
}
function pullResumo(){
    let par = document.createElement('p');
    par.innerText = 'Resumo: ' + texto.value
    return secao.lastChild.appendChild(par)
}
function pullCargo(){
    let par = document.createElement('p');
    par.innerText = 'Cargo: ' + cargo.value
    return secao.lastChild.appendChild(par)
}
function pullDescri(){
    let par = document.createElement('p');
    par.innerText = 'Descrição: ' + descri.value
    return secao.lastChild.appendChild(par)
}
function pullData(){
    let par = document.createElement('p');
    par.innerText = 'Data: ' + document.getElementById('datepicker').value
    return secao.lastChild.appendChild(par)
}
function apagaCurriculo(){
    secao.removeChild(secao.lastChild)
}
removeTudo.addEventListener('click',apagaCurriculo)

new JustValidate('.js-form',{
    rules:{
        nome: {
            required: true,
        }
    }
})
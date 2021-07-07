function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//inserir dias
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const unorder = document.getElementById('days');
for (let i = 0; i < dezDaysList.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'day';
    if (dezDaysList[i] === 24 | dezDaysList[i] === 25 | dezDaysList[i] === 31) {
        li.className += ' holyday'
    }
    if (dezDaysList[i] === 4 | dezDaysList[i] === 11 | dezDaysList[i] === 18 | dezDaysList[i] === 25) {
        li.className += ' friday'
    }
    li.innerHTML = dezDaysList[i];
    li.addEventListener('mouseover',zoom)
    li.addEventListener('mouseleave',unzoom)
    unorder.appendChild(li);
}

const bcont = document.getElementsByClassName('buttons-container')[0];
const holy = document.createElement('button');
const friday = document.createElement('button');

holy.innerHTML = 'Feriados';
holy.id = 'btn-holiday'
friday.innerHTML = 'Sexta-Feira'
friday.id = 'btn-friday'
bcont.appendChild(holy);
bcont.appendChild(friday);

friday.addEventListener('click',sextou)


//Colocar sextou
let salvaDia = [];
function sextou(){
    const sextafeiras = document.querySelectorAll('.friday');
    if (document.querySelectorAll('.friday')[0].innerText !== 'SEXTOU !'){
        for(let i = 0; i < sextafeiras.length; i += 1){
            salvaDia.push(parseInt(sextafeiras[i].innerHTML))
            sextafeiras[i].innerHTML = 'SEXTOU !';
        }
    }
    else if (document.querySelectorAll('.friday')[0].innerText === 'SEXTOU !') {
        for (let j = 0; j < sextafeiras.length; j += 1){
            document.querySelectorAll('.friday')[j].innerText = salvaDia[j]
        }
    }
}


function zoom(event){
    event.target.style = 'transform: scale(1.5); transition: .3s'
}
function unzoom(event){
    event.target.style = 'transform: scale(1); transition: .3s'
}

// const task = document.getElementsByClassName('task-list')[0];
// const mytask = document.getElementsByClassName('my-tasks')[0];


// function adicionaTarefa(){
    //     const createSpan = document.createElement('span');
    //     const input = document.getElementById('task-input');
    //     task.appendChild(createSpan)
    //     createSpan.innerText += input.value + '\n'
    //     const descri = document.createElement('div')
    //     descri.className = 'task'
    //     descri.style = 'color:red;';
    //     descri.innerHTML = 'descricao';
    //     mytask.appendChild(descri);
    
    // }
    
    const add = document.getElementById('btn-add');
    add.addEventListener('click', adicionaTarefa)

    function adicionaTarefa(string,cor){
        string = document.getElementById('task-input').value;
        cor = 'background-color: red;';
        const criadiv = document.createElement('div')
        const criaspan = document.createElement('span')
        criadiv.style = cor;
        criaspan.innerText = string + '\n';
        criadiv.innerHTML = 'legenda'
        document.querySelector('.my-tasks').appendChild(criadiv)
        document.querySelector('.my-tasks').appendChild(criaspan)
    }
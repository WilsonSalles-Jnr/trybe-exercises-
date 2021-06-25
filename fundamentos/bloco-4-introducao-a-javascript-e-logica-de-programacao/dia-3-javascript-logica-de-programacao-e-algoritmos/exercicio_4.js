let n = 5;
let estrela = '*';
let arr = ['','','*','',''];
let pares = false;
let todos = false;
for(let i = 0; i < n; i++){
    if(i===3){
        console.log(arr);
        pares = true;
    }
    if(pares===true){
        arr[1]= estrela;
        arr[3]= estrela;
        console.log(arr);
        pares = false;
    }
    if(i===4){
        todos = true;
    }
    if(todos===true){
        arr[0]= estrela;
        arr[4]= estrela;
        console.log(arr);
        todos = false;
    }
}
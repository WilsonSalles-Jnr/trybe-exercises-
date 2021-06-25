let n = 5;
let estrela = '*'
let arr = []
let count = n-1
for(let i = 0; i<n; i++){
    arr.push('');
}
let meio = Math.ceil(arr.length/2)
for(let j = 0; j<meio; j++){
    if(arr[0]==="*"){
        break;
    }
    if(arr[meio-2]==="*" && arr[0]===''){
        arr[meio+1]="*";
        arr[meio-3]="*";
        console.log(arr);
    }
    if(arr[meio-1]==="*" && arr[meio-2]===''){
        console.log(arr)
        arr[meio]='*';
        arr[meio-2]='*';
        console.log(arr);
    }
    arr[meio-1]=estrela
}
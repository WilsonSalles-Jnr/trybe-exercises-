let n = 5;
let estrela = '*';
let arr = ['','','','',''];
let count = n-1;
console.log(arr)
for(let i = 0; i < n; i++){
    arr[count]=estrela;
    count--;
    console.log(arr)
}
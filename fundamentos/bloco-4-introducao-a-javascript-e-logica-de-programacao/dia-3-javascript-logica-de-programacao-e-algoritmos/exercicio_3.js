let n = 5;
let estrela = '*'
let arr = []
let count = n-1
for(let i = 0; i<n; i++){
    arr.push('');
}
for(let j = 0; j<n; j++){
    arr[count]=estrela;
    count--;
    console.log(arr);
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valoresImpares =[];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i]%2==1){
        valoresImpares.push(numbers[i]);
    }
}
console.log(valoresImpares)
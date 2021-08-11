// // // apiScript.js     
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => document.getElementById('jokeContainer').innerText = `${data.joke}`);
// };

// window.onload = () => fetchJoke();

// exercício 2


const lista = (arr) => {
    return new Promise((funciona, naofunciona) => {
        let soma = arr.reduce((acc, cur) => acc += cur**2)
        if (soma < 8000) {
            funciona('funciona');
        }
        console.log(soma)
        naofunciona('não funciona')
    })
}
lista([1,2,3,4,5,6,7,8,9,10])
.then((certo)=>{
    console.log(certo)
})
.catch((error)=>{
    console.log(error)
})
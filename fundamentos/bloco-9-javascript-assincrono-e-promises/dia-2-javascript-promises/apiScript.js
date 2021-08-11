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
            let newarr =[2,3,5,10]
            let pushArr = []
            newarr.forEach((cur)=> pushArr.push(soma/cur))
            // console.log(pushArr)
            funciona(pushArr);
        }
        // console.log(soma)
        naofunciona("É mais de oito mil! Essa promise deve estar quebrada!")
    })
}
const somatudo= (par)=> {
    return new Promise ((ok,nok)=>{
        let somar = par.reduce((acc,cur)=>acc+=cur)
        if(somar > 300) {ok('maior que 300')}
        nok('menor que 300')
    })
}
lista([1,2,3,4,5,6,7,8,10,1])
.then((certo)=>{
    console.log(somatudo(certo)
    .then((sure)=>console.log(sure))
    .catch((fail)=>console.log(fail)))
})
.catch((error)=>{
    console.log(error)
})
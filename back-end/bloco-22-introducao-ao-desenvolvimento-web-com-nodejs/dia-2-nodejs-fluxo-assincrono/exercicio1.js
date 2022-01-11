const firstPromise = async(numA, numB, numC) => {
  const promise = new Promise((resolve, reject) =>{
    if([numA, numB, numC].some((cur) => typeof cur !== "number"))
    reject(new Error('Informe apenas números'));
    if((numA + numB) * numC < 50) reject(new Error('Valor muito baixo'));
    resolve(console.log((numA + numB) * numC))

  })
}

module.exports = firstPromise;
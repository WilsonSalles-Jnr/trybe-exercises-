const firstPromise = async(numA, numB, numC) => {
  if([numA, numB, numC].some((cur) => typeof cur !== "number"))
  throw new Error('Informe apenas números');
  try {
    if((numA + numB) * numC < 50) throw new Error('Valor muito baixo');
    return await console.log((numA + numB) * numC)
  } catch (error) {
    return await console.log(error)
  }
  // if([numA, numB, numC].some((cur) => typeof cur !== "number"))
  // reject(new Error('Informe apenas números'));
  // return (numA + numB) * numC
}
firstPromise(1,2,20).then(resp => resp).catch(error => console.log(error))
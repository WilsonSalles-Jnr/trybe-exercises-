const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((pessoa)=>pessoa.length ===5)
}

console.log(findNameWithFiveLetters());
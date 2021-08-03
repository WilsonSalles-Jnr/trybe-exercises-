const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const reducer = (acc, arr) => acc + arr;
  return grades.forEach((retornador,index)=> retornador[index].reduce((reducer))/retornador[index].length)
//   return grades[0].reduce((reducer))/grades[0].length
}
console.log(studentAverage())
// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// assert.deepStrictEqual(studentAverage(), expected);
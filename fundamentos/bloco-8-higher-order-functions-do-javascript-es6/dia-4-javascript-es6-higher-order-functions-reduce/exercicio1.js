const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let newArr = arrays.reduce((acc, arr)=> {
      
      return acc.concat(arr)
  })
  return newArr
}
console.log(flatten())
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
const assert = require('assert');
const { count } = require('console');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let count = 0
  names.reduce((acc, letraA) => {
      let gigante =  acc+= letraA
      for(let i =0; i < gigante.length; i+=1){
          if(gigante[i] === 'a'|| gigante[i] === 'A'){
              count += 1;
          }
      }
  })
  return count;
}
assert.deepStrictEqual(containsA(), 20);
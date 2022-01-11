const {expect} = require('chai');
const verificaNumero = require('./exercicio1')

describe('testando se um número é positivo, negativo ou neutro',()=>{
  it('positivo',()=>{
    expect(typeof verificaNumero(1)).to.be.equals('string');
    expect(verificaNumero(1)).to.be.equals('positivo');
  })
  it('negativo',()=>{
    expect(typeof verificaNumero(-1)).to.be.equals('string');
    expect(verificaNumero(-1)).to.be.equals('negativo');
  })
  it('neutro',()=>{
    expect(typeof verificaNumero(0)).to.be.equals('string');
    expect(verificaNumero(0)).to.be.equals('neutro');
  })
})
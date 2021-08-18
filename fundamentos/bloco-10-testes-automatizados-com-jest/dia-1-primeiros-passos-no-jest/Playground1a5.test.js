
const {compareTrue,
    calcArea,
    splitSentence,
    concatName,
    footballPoints,
    encode,
    decode
} = require('./Playground1a5');

test('Teste se encode e decode são funções',()=>{
    expect(typeof encode).toBe('function')
})

test('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente',()=>{
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
})
test('teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente',()=>{
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u')
})
test('Teste se as demais letras/números não são convertidos para cada caso',()=>{
    expect(encode('macaco')).toBe('m1c1c4');
    expect(decode('m1c1c4')).toBe('macaco')
})
test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.',()=>{
    expect(encode('param').length).toBe('param'.length)
})
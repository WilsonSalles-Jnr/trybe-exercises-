const {
    encode,
    decode,
    techList
} = require('./Playground1a5');


describe('exercício 1:', () => {

    test('Teste se encode e decode são funções', () => {
        expect(typeof encode).toBe('function')
    })

    test('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    })
    test('teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u')
    })
    test('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('macaco')).toBe('m1c1c4');
        expect(decode('m1c1c4')).toBe('macaco')
    })
    test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('param').length).toBe('param'.length)
    })
})

describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });
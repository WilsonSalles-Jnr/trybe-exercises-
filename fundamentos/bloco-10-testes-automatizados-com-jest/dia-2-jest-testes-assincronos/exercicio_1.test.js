
const uppercase = require('./exercicio_1');

test('verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas.',(done)=>{
    const callback = (dados)=>{
        expect(dados).toBe('HELLO')
        done()
    }
    uppercase('hello',callback)
})
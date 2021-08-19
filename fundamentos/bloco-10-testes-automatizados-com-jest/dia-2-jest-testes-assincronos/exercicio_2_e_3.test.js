const getUserName = require('./exercicio_2_e_3');


test('Verifica se ao passar um ID válido a função tem o resultado esperado', ()=>(
    getUserName(1).then((name)=>{
        expect(name).toBe('Mark')
    })
    .catch((error)=>{
        expect(error.message).toMatch(`User with 3 not found.`)
    })
))

test('Teste de erro',()=>(
    getUserName(3).catch((error)=>{
        expect(error.message).toMatch(`User with 3 not found`)
    })
))

test('Mesmo de antes só que com async e await',async()=>{
    const resultado = await getUserName(2)
    expect(resultado).toBe('Paul')
})

test('Mesmo de antes só que testando erro',async()=>{
    try{
        await getUserName(3)
    } catch(error){
        expect(error.message).toMatch(`User with 3 not found`)
    }
})
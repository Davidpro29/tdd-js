let app = require('../app')

test("Deve retornar o valor 10 ao somar 5+5", ()=> {
    let resultado = app.soma(5,5);
    expect(resultado).toEqual(10);
})

test('Deve terornar o resultado 25 ao multiplicar 5*5', () => {
    let resultado = app.multi(5,5);
    expect(resultado).toEqual(25)
})
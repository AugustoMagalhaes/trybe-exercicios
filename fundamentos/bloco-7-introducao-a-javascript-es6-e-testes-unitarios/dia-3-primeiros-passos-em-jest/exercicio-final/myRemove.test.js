const myRemove = require('./myRemove');

test('Checa se myRemove([1,2,3,4], 3) retorna o array esperado', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
});

test('Checa se myRemove([1,2,3,4], 3) retira o elemento "3" e nao devolve a array original', () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
});

test('Checa se myRemove([1,2,3,4], 5) retorna o array original', () => {
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
});
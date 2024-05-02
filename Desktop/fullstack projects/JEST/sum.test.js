const sum = require('./sum');

describe('sum', ()=>{
    test('adds 1+ 2 = 3', ()=>{
        expect(sum(0,4)).toBe(4)
    })
})
const formateDate = require("./formatDate");

const getDayFromNumber = formateDate.getDayFromNumber;

describe('check function getDayFromNumber', ()=>{
    test('return sunday', () => {
        expect(getDayFromNumber(0)).toBe('sunday');
    }),
    test('return saturday', () => {
        expect(getDayFromNumber(6)).toBe('saturday');
    })  
})
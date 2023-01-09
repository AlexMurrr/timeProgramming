const formateDate = require("./formatDate");

const getDayFromNumber = formateDate.getDayFromNumber;
const getArrDate = formateDate.getArrDate;

describe('check function getDayFromNumber', ()=>{
    test('return sunday', () => {
        expect(getDayFromNumber(0)).toBe('sunday');
    }),
    test('return saturday', () => {
        expect(getDayFromNumber(6)).toBe('saturday');
    })  
})

describe('check function getArrDate', ()=>{
    test('is arr', ()=>{
        expect(Array.isArray(getArrDate())).toBeTruthy();
    });
})
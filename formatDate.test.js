const jestDate = require('jest-date');
const formateDate = require("./formatDate");

const toBeBefore = jestDate.toBeBefore;

const getDayFromNumber = formateDate.getDayFromNumber;
const getArrDate = formateDate.getArrDate;
const getSumTime = formateDate.getSumTime;

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
        expect(Array.isArray(getArrDate(30))).toBeTruthy();
    });

    test('toBeBefore', ()=>{
        expect(new Date('1970')).toBeBefore(new Date(getArrDate(30)[0].toString()));
    });
    
    test('last element of array', ()=>{
        expect(getArrDate(30)[getArrDate(30).length-1]).toBe(30);
    });
   
})

describe('check function getSumTime', ()=>{

    const resBD = [{a:1,minutes:2}, {b:1, minutes:2}]

    test('return sum',()=>{
        expect(getSumTime(resBD)).toBe(4)
    })
    
})



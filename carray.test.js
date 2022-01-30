
const carray = require("./carray");

test("properly clone array",()=>{
    const array =[1,2,3]
    expect(carray(array)).toBe(array)
})
// steps:
// *import the file where functions are required
// require it
// *call test function whuch uese a arrow functtion having
// expect and tobe

const { required } = require("yargs")
const sum = require("./sumjest");

test ('properly adds 2 number ',() => {
   expect(sum(1,2)).toBe(3)
}) 
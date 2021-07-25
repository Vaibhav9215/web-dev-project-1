let a = 10;
function fn() {
    console.log("Hello i am a fn");
    return "hi";
}
function notToBeexported(){
    console.log("i dont want to be exported");
}
module.exports = {
    varName:a,
    fxn : fn }
let libExportObj = require("C:\\Users\\91895\\PP-12-21\\lecture2\\client.js");
console.log(" I am a cient file");
console.log (libExportObj . varName);
console.log(libExportObj.fxn());
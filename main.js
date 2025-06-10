const string = "text";
const numero = 777;
const boolean = true;
let x;
let nul = null;
const array = [];
const obj = {};
const nan = NaN;

console.log(`string - ${typeof string}`);
console.log(`numero - ${typeof numero}`);
console.log(`boolean - ${typeof boolean}`);
console.log(`undefined - ${typeof x}`);
console.log(`null - ${nul === null}`); //виводить об'єкт, але мені треба аби показало чи є там значення null


console.log(`object - ${typeof array}`);
console.log(`object - ${typeof obj}`);
console.log(`NaN - ${typeof nan}`); //отакої, і як тут бути

const a = nan;
console.log(`NaN - ${a}`); //випадково наткнувся при спробі вияснити як же всетаки вивести в консоль Nan




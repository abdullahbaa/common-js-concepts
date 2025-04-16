// Primitive types are pass by value
let num1 =5;
let num2=6;
function multiply(a,b){
    a=27;
    const result =a*b;
    return result;
}
const output = multiply(num1,num2);
console.log(output);

let student1 ={name: 'Jalim', partner: 'Borsha'};
let student2 ={name: 'RAj', partner: 'Anika'};
function makeMovie(couple1,couple2){
    couple1.name ='Ononto';
    couple2.partner='Mim';
}
console.log('S1',student1,student2);
makeMovie(student1,student2);
console.log('S2',student1,student2);
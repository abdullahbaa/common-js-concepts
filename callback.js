function greeting(person){
    console.log(person)
}
const number  = [45,55,66,77,88];
const laptop ={price : 3333,brand: 'lenovo',memory:'8gb'};
greeting(number);
greeting(laptop);

function greetingHandler (){
    console.log('Good Morning');
}
const myName ={
    name: 'Abdullah Bin Abdul Aziz',
    fatherName:'Abdul Aziz',
    motherName: 'Samsun Nahar',
    villge:'Mudaffarganj,Laksam,Cumilla',
    Country:'Bangladesh'

}
// greetingHandler();
console.log(greetingHandler(myName));
console.log(greetingHandler(greeting(laptop)));


function submitHandler (){
    console.log('Submit Button Clicked');
}
document.getElementById('btn-clicked').addEventListener('click',submitHandler);
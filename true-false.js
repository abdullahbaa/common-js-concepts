/**
 * Truthy:
 * 1-True
 * 2-Any number (+ve,-ve) will be truthly other than 0
 * 3-any string other than empty string 
 * 4-'name or number'
 * 5-Empty object {}
 * 6-Empty array []
 * 
 * Falsy
 * 1-False
 * 2- if number is 0
 * 3- [] Empty string
 * 4-'' blank quotation 
 * 5- undefined
 * 6-Null
 */
// truthy
// const x= true;
// const x= +4 || -4;
// const  x= {'abdullah'};
// const  x= 'Abdullah';
// const x= {} || {name: 'Abdullah',age:23};
// const x= [ ] || [ 2,3,4,5,6];

// Falsy
// const x= false;
// const num = 0;
// const [] =[];
// const x= '';
// const x = undefined;
// const x = null;

const x =false && true;
if(x){
    console.log('value of x is truthly');

}
else{
    console.log('value of x is falsy');

}

// Check falsy
const y =null;
if(!y){
    console.log('value of falsy');
}
// Check truthy
const z ={class:9};
if(!!z){
    console.log('value is truthy');
}

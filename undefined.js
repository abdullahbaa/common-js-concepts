/**
 * 8 ways to get undefined.
 * 1- Variable that is not initialized will give undefined.
 * 2-Function with no return will get undefined.
 * 3-Parameter that is not passed will be undefined.
 * 4-if return has nothing on the right side will return undefined.
 * 5-property that dosent exists on an object will give you undefined.
 * 6-accessing array elements outside of the index range.
 * 7-deleting an element inside an array.
 * 8-set a value directly to undefined.
 */

// Ex-1
let first ;
console.log('ex-1',first);

// Ex-2
function second(a,b){
    const total =a+b;
}
const result = second()
console.log('ex-2',result);

// Ex-3
function third(a,b,c,d){
    const total =a+b+c+d;
    console.log('ex-3',a,b,c,d);
}
third(2,3);

// Ex-4
function noNagitive(a,b){
    if(a<0 || b<0){
        return
    }
    return a+b;
}
const total = noNagitive(2,-4)
console.log('ex-4',total);

// Ex-5
const fifth ={id:2,name:'alu',age:22}
console.log('ex-5',fifth.age,fifth.salary);

// Ex-6
const sixth=[4,5,6,7,8];
console.log('ex-6',sixth[1],sixth[5],sixth[200]);

// Ex-7
const sixths=[4,5,6,7,8];
// you should not do it,instead use splice
delete sixths[1];
console.log('ex-7',sixths[1],sixths[5],sixths[200]);


// Ex-8
const eight = undefined;
const ninth = null;
const data ={results: [], updated : null};
console.log('ex-8',typeof undefined, typeof null);

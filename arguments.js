function sum(a,b,c){ //function er moddhe jegula set kora oigula ke bole "Parameters"
    // console.log(arguments[2]); //array like object
    const argu =[...arguments];
    console.log(argu);
    const result =a+b+c;
    return result;
}
const total = sum(32,55,66); //function call korar time e jei values dewa hoy, ogulake bole "Arguments"
console.log(total);
console.log(sum.length);
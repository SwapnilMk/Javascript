let a = 1;
let b = 2;

// normal function 
function avg(a,b) {
    console.log(`avg of a and b is`,  (a+b)/2);
}
avg(1,5)


//   arrow function 
let func = ()=>{
    console.log(`hey`)
    return `i am noob`;
}

console.log(func())

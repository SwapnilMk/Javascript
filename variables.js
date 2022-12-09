// console.log("all about variables let var and const")

// let stuName = `swapyy`;
// let age  = 23;
// let a = Number(1);
// let b = parseFloat(`3.5`);
// let f = parseInt(`332.235`);
// let c = String(`w`);
// let d = Boolean(12);

// console.log(f);

// const myDetail = (stuName, age)=>{
//     return `my name is ${stuName} and my age is ${age}`
// } 

// let val = myDetail(stuName, age)
// console.log(val);

// function myDetails(){
//     console.log(stuName, age)
// }

// console.log (`my name is ${stuName} and my age is ${age}`)

// there are some rules for declare variables 
// let _name = `swapyy`;
// let $name = `swapyy`;
// let name = `swapyy`; // we can do this

// let 123name = `swapyy`;
// let var = `swapyy`;
// let @name = `swapyy`;  // we cannot do this



// redeclaring possible in var 
// var student = `lokesh`;
// console.log(student)
// var student = `swapyy`;
// console.log(student)

// this is not possible in let and const
// let student = `lokesh`;
// console.log(student)
// let student = `swapyy`;
// console.log(student)


// var has global scope 
// let and cosnt has a block level scope

// var b = `swapyy`;
// console.log(b) //swapyy
// {
//     console.log(b) //samiayaah
//     var b = `samiyaah`
//     console.log(b) //samiayaah
// }
// console.log(b) // samiyaah



// let b = `swapyy`;
// console.log(b) //swapyy
// {
//     let b = `samiyaah`
//     console.log(b) //samiayaah
// }
// console.log(b) // swapyy


// const name; //cannot do this
// let name; //do this  //output undefine
// var name; //do this  //output undefine
// console.log(name)



// diffrent ways to declare variable 

// const name = `swapyy`;
// const surname = `mahadik`;
// const age = 22;
// console.log(`my name is ${name} ${surname} my age is ${age}`);




// function checkScope() {
//     var name = `swapyy`; // this is only function level scope and this is not accessible in outside of the function
//     console.log(name);
// }
// console.log(name); // output is undefine

// var name = `swapyy`; //this is global scope access everywhere


// var name = `swapyy`;
// var num = 12;

// if(num > 1){
//     var name = `swapnil`;
// }

// console.log(name)


// const cannot be updated or re-declared
// const greet = {
//     sayhi : `hello`
// }


// greet.sayhi = `swapyy`
// console.log(greet);



// {
//     var a = 12
//     console.log(a);
// }

// console.log(a);


let a = 1;
let b = 2;

// normal function 
// function avg(a,b) {
//     console.log(`avg of a and b is`,  (a+b)/2);
// }
// avg(1,5)


//   arrow function 
// let func = ()=>{
//     console.log(`hey`)
//     return `i am noob`;
// }

// console.log(func())





// function myAge(age){
//     return `my age is ${age}`;
// }

// let age = myAge(22);
// console.log(age);






// functions and scopes
// let name = `swapyy`
// let marks = 12;



// normal function 

// function test(name, marks) {
//     console.log(`hey ${name} you got ${marks}`)
//     return `swapyyy`;
// }

// let result = test(`name`, 13);
// console.log(result)





// arrow function 

// let test = name=>{console.log(`hey ${name} you got`) }

// let name = `swapyy`
// test(name)





// let name = `swapyy`;
// let age = 22;
// let number = 4893284790;

// function myfun(name, age, number) {
//     msg = `my name is ${name} my age is ${age} u can call me ${number}`;
//     return msg;
// }

// let a = myfun(name, age, number);
// console.log(a)




// const myfun = function(){
//     console.log(`annonomus function`);
// }
// myfun();



// immediately invoked function 

// let abc =()=>{
//    return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(23)
//         },2300)
//     })
// } 

// (async()=>{
//     let a = await abc
//     console.log(a);
// })()

// abc.then((value)=>{
//     console.log(value);
// })







// arrow function extra  
const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hi")
  }
  
  const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function() {
      // let that = this
      // console.log(this)
      setTimeout(() => {
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
    }
  }
  sayHello("Harry", "Good Afternoon")
  // console.log(x.name, x.exp)
  // x.show()
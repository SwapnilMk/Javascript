// closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function


// msg = `good afternoon`

// function hello() {
//     msg = `goood morning`
//     console.log(`hello ${msg}`)
//     function name() {
//         console.log(`call me ${msg}`);
//     }
//     return name
// }

// let name1 = hello()
// name1()


// let x = ()=>{
//     let a  = 1
//     console.log(a);
//     let y = ()=>{
//         // let a  = 2
//         console.log(a)
//         let z = ()=>{
//             // let a  = 3
//             console.log(a)
//         }
//         z()
//     }
//     a = 122
//     y()
// }


// x()


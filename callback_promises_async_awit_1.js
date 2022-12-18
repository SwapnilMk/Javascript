
// Asynchronize
// console.log(`hey am first`)

// setTimeout(()=>{
// console.log(`i am groot`)
// }, 1000)

// console.log(`hey am last`)



//callbacks

// pass function as a argument 

// function loadSrc(src, callback) {
//     let script = document.createElement(`script`);
//     script.src = src;
//     script.onload = () => {
//         console.log(`script loded!`, src)
//         good(null, `swapyy`)
//     }
//     script.onerror = () => {
//         console.log(`error occurd`, src);
//         good(new Error(`src got some error`), `swap`)
//     }
//     document.head.appendChild(script)
// }

// let cdn = `https://cdn.tailwindcss.com`

// let name = `swapyy`

// let good = (error, name) => {
//     alert(`hey ${name} some error occurd ${error}`)
// }

// loadSrc(cdn, good)



//promises


// let promise = new Promise((reslove, reject)=>{
    // console.log(`hello`);
//     if(true){
//         reslove(42)
//     }else{
//         reject(true)
//     }
// })

// promise.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(new Error())
// })

// console.log(promise);






// let p = new Promise((resolve, reject)=>{
//     let a = true
//     setTimeout(()=>{
//         console.log(`promise is pending`)
//         if(a == true){
//             resolve(a)
//         } else {
//             reject(new Error)
//         }
//     }, 3000)
// })


// p.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error)
// })















// let p = new Promise((reslove, reject)=>{
//     console.log(`i am promise`)
//     setTimeout(()=>{
//         console.log(`i am promise not resolve`);
        // reslove(true)
//         reject(true)
//     }, 2000)
// })

// console.log(p)

// p.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(`an error occured`, new Error(error));
// })





// let promises = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(`this is promise 1`);
//         resolve(21);
//     }, 2000)
// })

// promises.then((value) => {
//     console.log(value)
//     let p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`this is promise 2`);
//             resolve(212)
//         }, 1000);
//     })
//     p1.then((value) => {
//         console.log(`we are done`, value);
//         let p2 = new Promise((resolve, reject) => {
//             resolve(true)
//             console.log(`haha done bro`)
//         })
//     })
// })




// Promise Api methods 

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//         console.log(`p1 done`);
//     }, 1000)
// });

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(`swap`)
//         console.log(`p2 done`);
//     }, 2000)
// })


// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(true)
//         console.log(`p3 done`);
//     },4000)
// })

// setTimeout(()=>{
//     console.log(p1,p2,p3)
// }, 6000)


// let promise_all = Promise.all([p1,p2,p3]);          //throws error when error occurs
// let promise_all = Promise.allSettled([p1,p2,p3]);  //complete task without any error
// let promise_all = Promise.race([p1,p2,p3]);       //return 1st resolve promise but error occurred
// let promise_all = Promise.any([p1,p2,p3]);          //return 1st resolve promise without any error
// let promise_all = Promise.resolve(6);                   //return resolved promise
// let promise_all = Promise.reject(new Error(`haha`));          //return error

// promise_all.then((value)=>{
//     console.log(value);
// })



// async await 

// async function hey(){       
//     console.log(hey)
//     return 12
// }

// hey().then((value) => {
//     console.log(value);
// })




// const daddy = async()=>{
//     let a = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`i am inside a`)
//             resolve(`a`)
//         },2000)
//     })

//     let b = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`i am inside b`)
//             resolve(`b`)
//         },4000)
//     })

//     let promise_a = await a;
//     let promise_b = await b;
//     return[promise_a,promise_b]

// }

// daddy().then((value) => {
//     console.log(value);
// })



//error handling


//try catch

// console.log(`hey`)

// try {
//     console.log(hey); 
// } catch (error) {
//     console.log(`error is` + ` ` + error)
// }




// try {
//     console.log(`error`); 
//     throw new Error(`i am noob`)
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }



// finally clause 
// try {
//     throw new Error(`hey i am error`)
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
// } finally {
//     console.log(`i am Groot`);
// }





// const lodeSrc = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement(`script`)
//         script.src = src;
//         script.onload = () => {
//             resolve(src + ` done`)
//         }
//         document.head.appendChild(script)
//     })
// }

// let a = lodeSrc(`https://cdn.tailwindcss.com`)

// setTimeout(() => {

//     console.log(a);
// }, 1000)


// a.then((value) => {
//     console.log(value)
// })




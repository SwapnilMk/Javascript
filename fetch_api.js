
// let p = fetch(`https://nekos.best/api/v2/neko`);



// p.then((response)=>{
//     console.log(response.headers)
//     return response.json()
// }).then((value)=>{
//     console.log(value);
// })

// console.log(p)



// post request 

// let myAsync = async()=>{

//     let options = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({
//         title: 'swapyy',
//         body: 'helo',
//         userId: 69,
//     })
// }


// let r = await fetch('https://jsonplaceholder.typicode.com/posts', options)
// let response = await r.json()
// return response

// }




// const myfunc = async()=>{
//     let todo = await myAsync()
//     console.log(todo)
// }

// myfunc()


// console.log(getTodo(1));
// const getTodo = async(id)=>{
//     let res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
//     let r = await r.json()
//     return r
// }





// let object = {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify({
//         title: 'i am noob',
//         body: 'my name is swapyy',
//         userId: 69,
//     })
// }

// let p = fetch('https://jsonplaceholder.typicode.com/posts', object)

// p.then((response) => {
//     console.log(response);
//     return response.json()
// }).then((value) => {
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })



// const func = async()=>{

//     let postObj = {
//         method: `POST`,
//     headers: {
//         "Content-type": "application/json"
//     },
//     body : JSON.stringify({
//                     title: 'i am noob',
//                     body: 'my name is swapyy',
//                     userId: 69,
//                 })
//     }

// let url = await fetch("https://jsonplaceholder.typicode.com/todos", postObj)

// let response = await url.json()

// return response

// }

// console.log(func());

// const myFunc = async()=>{
//     let val = await func()
//     console.log(val)
// }

// myFunc()
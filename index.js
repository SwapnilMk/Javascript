


// objects 


// let obj = {
//     name: `swapyy`,
//     surname: `mahadik`,
//     age: 22,
//     number: 7057332679
// }

// console.log(obj);
// console.log(obj.hasOwnProperty(`age`));
// console.log(obj.name);
// console.log(obj[`name`]);


















// let a = window.document
// console.log(a)



// let div = document.getElementById(`my1`);

// div.innerText = `style`

// console.log(div)

// let a = document.getElementsByClassName(`child`);

// console.log(a)

// Array.from(a).forEach(function(element) {
//     console.log(element)

// });



// Array.from(dom).forEach(function(element, array, index){
//     console.log(element, array, index);
// })



// let mytag = document.getElementsByTagName('div');

// console.log(mytag);

// for (let i = 0; i < mytag.length; i++) {
// mytag[1].style.border = '1px solid blue';
// }



// const elm = document.querySelectorAll(`div`);

// let first = elm[4]

// console.log(first);


// let sex = document.querySelector(`#my2`);

// console.log(sex.parentElement);


// let siblings = document.querySelector(`#sex`);
// siblings = siblings.nextElementSibling
// console.log(siblings);


// let paragraph = document.createElement(`h1`);                
// let text = document.createTextNode("This is a paragraph.");       
// let append = paragraph.appendChild(text);  


// let child = document.querySelector(`#my2`);
// console.log(child.children);



// let elm = document.createElement(`h1`);
// elm.className = `red`;
// elm.id = `created`;
// elm.setAttribute(`style`, `color: red`);
// elm.innerText = `hey i  am fucking good`
// let sel = document.querySelector(`div.red`);
// sel.appendChild(elm)

// console.log(elm)
// console.log(sel)




// let elm2 = document.createElement(`h3`);
// elm2.id = `elm2`;
// elm2.className = `swap`
// let tnode = document.createTextNode(`hehehe`);

// elm2.appendChild(tnode)
// console.log(elm2);

// let h1 = document.querySelector(`h1`);
// console.log(h1)

// h1.replaceWith(elm2)


// let elm = document.getElementById(`head`).addEventListener(`mouseenter`, function(){
//     console.log(`u clicked tgat`);
// });


// function func1(a) {
//     console.log(`heyyy`)
//     console.log(a)
// }

// let btn = document.getElementById(`my2`).addEventListener('click', func1)




// local Storage and sessionStorage
// localStorage.setItem(`name`,`swapyy`);
// localStorage.setItem(`surname`,`swapysy`);

// localStorage.removeItem(`name`);

// localStorage.clear()

// localStorage.removeItem(`name`)


// let name = localStorage.getItem(`name`);
// console.log(name)



// let arr = [`swapyy`, 29, `mahadik`];

// localStorage.setItem(`details`, JSON.stringify( arr));

// let str = JSON.parse(localStorage.getItem(`details`));

// console.log(str)



// session storage 

// sessionStorage.setItem(`name`, `swapyy`)


// localStorage.clear()
// sessionStorage.clear()


// let z = Math;
// console.log(z)


// let today = new Date();
// console.log(today);



// Object orianted programming 

// function info(name, surname, age){
//     this.firstName = name,
//     this.surname = surname,
//     this.age = age
//     this.aboutUs = function () {
//         console.log(`hey i am groot`)
//         return `swapyy`;
//     }
// };

// info.prototype.getname = function (name) {
//     this.name = name;
// }

// information = new info(`swapnil`, `mahadik`, 22)
// console.log(information.aboutUs());
// console.log(information);


// const proto = {
//     name: function(name){
//         return `my name is ${name}`
//     },
//     age: function (yourage) {
//         this.age = yourage
//     }
// }

// const swapyy = Object.create(proto);

// swapyy.name = `swapyy`
// swapyy.age(12)
// console.log(swapyy)


// function employee(name, salary, exp) {
//     this.name = name;
//     this.salary = salary;
//     this.exp = exp;
// }

// employee.prototype.msg = function () {
//     return `hehe noobs ${this.name}`
// };

// let swapyy = new employee(`swapnil`, 21, 2)

// console.log(swapyy)
// console.log(swapyy.msg())





// class emp{
//     constructor(givenName, givenAge){
//         this.name = givenName;
//         this.age = givenAge;
//     }
//     talk(){
//         return `i am ${this.name}`
//     }
// }

// swapyy = new emp(`swapyy`, 21);
// console.log(swapyy)
// console.log(swapyy.talk())



// class info{
//     constructor(id, name, surname, age){
//         this.id = id;
//         this.firstname = name;
//         this.lastname = surname;
//         this.age = age;
//     }
//     msg(){
//         return `my full name is ${this.firstname}`
//     }

//     static add(a , b){
//         return a + b;
//     }
// }

// emp = new info(1, `swapyy`, `mahadik`, 21)
// console.log(emp.msg())
// console.log(info.add(1, 2))


// class programmer extends info{
//     constructor(id, name, surname, age, code){
//         super(id, name, surname, age);
//         this.lang = code;
//     }
//     static favLang(code){
//         if (code == `html`) {
//             return `you are noob bich`;
//         }
//     }

// }


// coder = new programmer(1, `swapyy`, `mahadik`, 22, `html`);

// console.log(programmer.favLang(`html`))



// Asynchronus javascript  

// setTimeout(() => {
//     for (let index = 0; index < 4; index++) {
//         const element = index;
//         console.log(`done printing` + index)

//     }
// }, 1000);

// console.log(`done`)


// XML post 

// let fetchBtn = document.getElementById(`fetchBtn`);
// fetchBtn.addEventListener(`click`, btnHandler);

// function btnHandler() {
// create xml http object 
// const xhr = new XMLHttpRequest();

// open object 
// xhr.open(`GET`, `swapyy.txt`, true);

// xhr.onprogress = function () {
//     console.log(`on progress baby`)
// }

// xhr.onreadystatechange = function () {
//     console.log(this.readyState)
// }

// xhr.onload = function () {
//     if(this.status === 200){

//         console.log(this.responseText)
//     } else {
//         console.error(`hahahah`)
//     }
// }

//     xhr.send()
// };




// Callback functions // Pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]


// function enrollStudent(student, callback){
//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 1000);
// }

// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);
// getStudents();






// promise in javascript
// function func1(){
//     return new Promise(function(resolve, reject) {

//         setTimeout(() => {
//             const error = false;
//             if (!error) {
//                 console.log(`done`)
//                 resolve();
//             } else {
//                 console.log(`not done hahaha`);
//                 reject(`sorry`);
//             }
//         }, 3000);
//     });
// }

// func1().then(() => {
//     console.log(`hhahaha`)
// }).catch(() => {
//     console.log(`lol`)
// })




// Arrow functions 
// const swapyy = ()=>{
//     return `hey`
// }

// const swapyy = ()=> `hey`

// const swapyy = name => `whatsapp ${name}`
// console.log(swapyy(`swapyy`))









// Fetch API 
// Button with id myBtn
// let myBtn = document.getElementById("myBtn");

// div with id content 
// let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "swapyy.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }





// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }





// function postData(){
//     url = "https://dummy.restapiexample.com/api/v1/create.com/api/v1/create";
//     data = '{"name":"swapyydsay","salary":"12323","age":"23"}'
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }





// console.log("Before running getData")
// getData()


// console.log("After running getData")
// postData()










// async And await
// async function swapyy() {
//     return `swapyy`;
// }
// console.log(`before`);
// let a = swapyy()
// console.log(`after`);
// console.log(a)
// console.log(`last line`);







// error handling 
// try /catch / finally




// let arr = [2, 5, 10, 20]

// let arr1 = arr.map((elm) => {
//     return elm * 2
// })
// console.log(arr1);


// let obj = {
//     name: `swapnil`,
//     age: 21,
//     phone: 7057332679
// }


// let obj = new Object();

// obj.name = `swap`

// console.log(obj);


// function Student(name, age){
//     this.name = name,
//     this.age = age
// }

// let obj = new Student(`swap`, 22)

// Student.prototype.surname = `mahadik`

// console.log(obj);



// let obj = {
//     name: `swapyy`,
//     surname: `mahadik`,
    // get getName(){
    //     return this.name.toUpperCase()
    // }

//     set setName(name){
//        return this.name = name.toUpperCase()
//     }
// }

// obj.setName = `swapyy`
// console.log(obj)



// hoisting 
// "use strict"

// var x = 5;
// console.log(x);




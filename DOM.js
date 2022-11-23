// console.log(window)
// console.log(document)
// console.log(document.body)





// document.body.style.background = `red`


// location.href = `https://www.google.co.in/` 


// document.body;
// document.title = `notessss`;
// document.documentElement;

// console.log(document.body.lastChild)
// console.log(document.body.lastElementChild)
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.childNodes)
// console.log(document.body.hasChildNodes())

// let a = document.body.childNodes
// let b = Array.from(a);
// console.log(b);

// b.forEach((elm) => {console.info(elm)})

// console.log(document.body.childNodes[document.body.childNodes.length - 1]) // get last element of child node




// console.log(document.body.previousElementSibling.nextElementSibling)

// console.log(document.body.firstElementChild.parentElement.parentNode);





// seraching DOM 
// document.getElementById
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll




// maches closest contain methods 

// let a = document.body.firstElementChild.lastElementChild
// console.log(a)
// console.log(a.matches(`#swap`)); //true  //match and retrun true or false
// console.log(a.closest(`.p`))
// console.log(a.contains(`.p`))





// document.getElementsByTagName(`nav`)[0].style.background = `grey`
// document.getElementsByTagName(`nav`)[0].style.color = `white`

// document.getElementsByTagName(`ul`)[0].firstElementChild.style.color = `green`
// document.getElementsByTagName(`ul`)[0].lastElementChild.style.color = `green`

// Array.from(document.getElementsByTagName(`ul`)).forEach((elm)=>{
//     elm.style.color = `red`
// })



// let acc = document.getElementsByClassName(`container`)[0].lastElementChild;
// acc.setAttribute(`name` , `swap`)
// console.log(acc)


// table base navigation 
// let table = document.getElementsByClassName(`container`)[1].firstElementChild

// console.log(table.rows);


// innerHTML //get and set get html inside the string // only for elemnt nodes

// outerHTML //get outer and inner html both //we can set and get 

// .data 
// .nodeValue 
// .textContent //get all text from content
// .hidden = false 





// attribute methods 
// let att = document.getElementById(`first`).getAttribute(`class`)
// console.log(att)

let attr = document.getElementById(`first`)
// console.log(attr.hasAttribute(`style`))

// attr.setAttribute(`hidden`, true)
// attr.removeAttribute(`class`)
// console.log(attr.attributes);


// custom attributes 
// let attri = document.getElementById(`swap`)
// attri.setAttribute(`data-game`,`gtaV`)
// attri.setAttribute(`data-game1`,`fortnite`)
// attri.setAttribute(`data-game2`,`csGo`)
// console.log(attri.dataset.game)




// Element insertion 

// let div = document.createElement(`span`)
// div.innerText =`hey`
// console.log(div)

// let elm = document.getElementsByClassName(`container`)[1].lastElementChild
// console.log(elm);

// elm.appendChild(div); //add in last 
// elm.prepend(div); //add in first
// elm.before(div); //outside up 
// elm.after(div);  //outside down
// elm.replaceWith(div);  // replace elm element to div

// elm.remove() //remove element from dom




// beforebegin 
// afterbegin 
// beforeend 
// afterend 


// elm.insertAdjacentHTML(`beforebegin`, `outside up`)
// elm.insertAdjacentHTML(`afterbegin`, `inside up`)
// elm.insertAdjacentHTML(`beforeend`, `inside down`)
// elm.insertAdjacentHTML(`afterend`, `outside down`)






// classList and className methods

let con = document.getElementsByClassName(`container`)[0];
con.className = `container red mx-2 py-3 px-21 mt-5`


// console.log(con.classList);

// con.classList.remove(`red`) //add

// con.classList.add(`hello`) // remove

// con.classList.toggle(`hello`) //if alredy added remove and if not added add it

// console.log(con.classList.contains(`hello`)) //true / false

// console.log(con)







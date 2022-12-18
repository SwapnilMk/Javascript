// let obj = {
//     name: `swapyy`
// }


// console.log(obj)


// let p = {
//     run: ()=>{
//         console.log(`run`)
//     }
// }
// obj.__proto__ = p;

// obj.run()


// p.__proto__ = {
//     names: `swapyy`
// }

// obj.run()


// console.log(p.names);


// class myCar {
//     constructor(name, year) {
//         this.Carname = name;
//         this.year = year
//     }
// }

// let supra = new myCar(`Toyota_supra`, 2022 )

// console.log(supra.Carname, supra.year)


// class RailwayFrom{
//     submit(){
//         console.log(`${this.name} your form is submit`)
//     }
//     cancel(){
//         console.log(`${this.name} your form is cancelled`)
//     }

//     fill(givenName){
//         this.name = givenName
//     }
// }

// let swapyyForm = new RailwayFrom()
// swapyyForm.fill(`swapnil`)

// swapyyForm.submit()



// let samiForm = new RailwayFrom()
// samiForm.fill(`samiyaah`)

// samiForm.submit()
// samiForm.cancel()







// constructor 
// class admissionForm{
//     constructor(name,rollno,age,phone){
//         this.firstName = name;
//         this.rollno = rollno;
//         this.age = age;
//         this.phone = phone;
//     }

//     fill(){
//         console.log(this.firstName);        
//     }
//     review(){}
//     submit(){}
//     cancel(){}
// }

// let swapnilForm = new admissionForm(`swapnil`,43,22,7057332679)
// swapnilForm.fill()
// console.log(swapnilForm);



// class yourDetails {
//     constructor(name, surname, rollno, phone, address) {
//         this.name = name;
//         this.surname = surname;
//         this.rollno = rollno;
//         this.phone = phone;
//         this.address = address;
//         // console.log(`first`)
//     }

//     fillDetails() {
//         const fullName = this.name + ' ' + this.surname;
//         const rollNo = this.rollno;
//         const phone = this.phone;
//         const address = this.address;
//         console.info(`
//         my name is ${fullName} 
//         roll number is ${rollNo}    
//         contact me ${phone}
//         ADDRESS ${address}
//         `)
//     }

//     submit(){
//         alert(`form is submitted`)
//     }
// }

// let swapnil = new yourDetails(`swapnil`, `mahadik`, 29, 7057332679, `navi mumbai`)
// swapnil.fillDetails()
// swapnil.submit()
// console.log(swapnil.phone)




// inheritance and extends 

// class Animal{
//     constructor(name,color){
//         this.name = name;
//         this.color = color;
//     }

//     run(){
//         console.log(`${this.name} is running`);
//     }
// }

// let dog = new Animal(`dog`, `brown`)

// console.log(dog);

// dog.run()


// extend another class

// class bird extends Animal{
//     eatBanana(){
//         console.log(this.name + " is eating banana")
//     }
// }

// let monk = new bird(`minkey`, `red`)

// monk.run()
// monk.eatBanana()




// super() keyword Method overiding

// class Employee{
//     login(){
//         console.log(`employee has logged in`);
//     }
//     logout(){
//         console.log(`employee has logged out`);
//     }
//     leaves(leaves){
//         console.log(`employe has requested ${leaves} leaves`)
//     }
// }

// class Programer extends Employee{
//     coffee(){
//         console.log(`programmer want coffee`);
//     }
//     leaves(leaves){
//         super.leaves(leaves + 1)
//     }
// }

// let a = new Employee()
// let b = new Programer()

// a.login()
// a.leaves(2)
// b.leaves(2)



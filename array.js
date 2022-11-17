
// arrays
// const arr = [`swapyy`, `samiyaah`, `loeksh`, `swapnil`]


// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// for(let i in arr){
//     console.log(arr[i])
// }


// for(let i of arr){
//     console.log(i);
// }


// arr.forEach((elm)=>{
//     console.log(elm);
// })



// const marks = [800, 78, 67, 86, 90, 34, 5, 54, 6, 7, 8, 678];
// delete marks[1];
// console.log(arr[1]);

// const str = marks.toString()
// console.log(str);



// marks.splice(2,4,12,34,324,3,534,534,34)
// console.log(marks)

// let a = marks.slice(2,10)
// console.log(marks);


// let sorting =(a,b)=>{
//     return a-b;
// }
// marks.sort(sorting)
// console.log(marks);


//there are two ways to create array
// let arr1 = Array.of(1,2,3,4,`swao`)
// console.log(arr1);

// let arr2 = new Array(`swap`,`nap`);
// console.log(arr2);


// let arr3 = marks.concat(arr1,arr2);
// console.log(arr3);


// let arr4 = arr1.join(arr2)
// console.log(arr4)



// for(let i=0; i < name.length; i++){
//     console.log(name[i])
// }

// arr.forEach((value,index,array) => {
//     console.log(value,index,array)
// })



// const names = Array.of(`homelander`,`starlight`,`mave`,`bucher`,`komiko`)

// names.unshift(`swapyy`); add 1st element in array
// names.push(`last`); add last element in array
// names.shift(); remove 1st element in  array
// names.pop(); remove last element in array
// names[6] = `samiyaah`
// names.reverse();
// console.log(names);




// arr.splice(0,3);

// console.log(arr.includes(4,0));                                 
// console.log(arr.toString());
// let a = arr.concat(marks);
// console.log(a);

// console.log(arr.length);
// console.log(Array.isArray(arr));

// arr[0] =`swapyy`;
// console.log(arr);



// let val = arr.indexOf(234);
// console.log(val);





// let arr = [1,213,4,5,6,7,8,3];

// let arr =new Array(12,2,4,5,6,7,8,3);
 


// let arr = [34,4,345,436,567,4343,214,324,2,4321,423,4]

// arr.forEach(function(element, index,array) {
//     console.log(element, index, array)
// });




// map / filter / reduce in array

// const arr = [16,24,3,4,522,6,76,25]


// arr.forEach((element,index,array)=>{
    //     console.log(element)
    // })
    
    

// const a = arr.map((element,index,array)=>{
//     return element * 2
// })
// console.log(a)



// let fill = arr.filter((element)=>{
    //     return element < 30
    // })
    // console.log(fill);


    // let red = arr.reduce((a1,b1)=>{
    //     return a1 + b1
    // })
    // console.log(red)
    






    const arr = [1,2,4,5,6,70,80,45450,2420];

    let sqr = arr.map((element)=>{
        return element * element
    })
    console.log(sqr);



    // let a = arr.filter((a)=>{
    //     return a%10 == 0
    // })
    // console.log(a)



    // let a;
    // do{
    //     a = prompt(`enter your number`)
    //     a=Number.parseInt(a)
    //     arr.push(a)
    // }while(a != 0)
 
    // console.log(arr)

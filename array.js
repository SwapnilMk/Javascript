
// arrays
// const arr = [`swapyy`, `samiyaah`, `loeksh`, `swapnil`]


// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// for(let index in arr){
//     console.log(arr[index])
// }


// for(let i of arr){
//     console.log(i);
// }


// arr.forEach((elm, index ,arr)=>{
//     console.log(elm);
//     console.log(index);
//     console.log(arr);
// })



// const marks = [800, 78, 67, 86, 90];
// delete marks[1];
// marks[1] = 55;
// console.log(marks.toString());

// let splice = marks.splice(2,4)
// console.log(splice)


// const str = marks.toString()
// console.log(str);

// marks.splice(2,1)
// console.log(marks)


// let a = marks.slice(2,4)
// console.log(a);

// let arr = [1,2,34,4,5,6,7,100,234,12,456,884,1233]

// arr.sort((a,b)=>{
//     return a - b
// })
// console.log(arr);



// let Under100 = arr.filter((a)=>{
//     return a > 100;
// })
// console.log(Under100);




//there are two ways to create array
// let arr1 = Array.of(1,2,3,4,`swap`)
// console.log(arr1);

// let arr4 = new Array(`swap`,`nap`);
// console.log(arr2);


// const arr1 = [`swapnil`,`kishor`,`mahadik`]
// const arr2 = [23,`maharasthra`, 410206]


// let arr3 = arr1.concat(arr2, `swap`, arr4);
// console.log(arr3);


// let arr4 = arr1.join(arr2)
// console.log(arr4)



// for(let i=0; i < name.length; i++){
//     console.log(name[i])
// }

// arr.forEach((value,index,array) => {
//     console.log(value,index,array)
// })



// const superHeros = Array.of(`homelander`,`starlight`,`mave`,`bucher`,`komiko`)

// superHeros.unshift(`swapyy`); // add 1st element in array
// superHeros.push(`last`); add last element in array
// superHeros.shift(); remove 1st element in  array
// superHeros.pop(); remove last element in array
// superHeros[6] = `samiyaah`
// superHeros.reverse();
// console.log(superHeros);




// arr.splice(0,3);

// console.log(arr.includes(4,0));                                 
// console.log(arr.toString());
// let a = arr.concat(marks);
// console.log(a);

// console.log(arr.length);
// console.log(Array.isArray(arr));

// arr[0] =`swapyy`;
// console.log(arr);



// let val = superHeros.indexOf(`mave`);
// console.log(val);





// let arr = [1,213,4,5,6,7,8,3];

// let arr =new Array(12,2,4,5,6,7,8,3); 



// let arr = [34,4,345,436,567,4343,214,324,2,4321,423,4]

// arr.forEach(function(element, index,array) {
//     console.log(element, index, array)
// });




// map / filter / reduce in array

// const arr = [16,24,3,4,522,6,76,25]

// let newArr = arr.map((e)=>{
//     return e + 1;
// })

// console.log(newArr);

// let sortArr = newArr.sort((a, b) => {
//     return a - b
// })

// sortArr.reverse()
// console.log(sortArr)

// arr.forEach((element,index,array)=>{
    //     console.log(element)
    // })
    
    

// const a = arr.map((element,index,array)=>{
//     return element * 2
// })
// console.log(a)



// let fill = arr.filter((element)=>{
//         return element < 30
//     })
//     console.log(fill);


    // let red = arr.reduce((a1,b1)=>{
    //     return a1 + b1
    // })
    // console.log(red)
    






    // const arr = [1,2,4,5,6,70,80,45450,2420];

    // let sqr = arr.map((element)=>{
    //     return element * element
    // })
    // console.log(sqr);



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
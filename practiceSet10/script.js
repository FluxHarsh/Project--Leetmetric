//Ans1
// let arr = [1, 2, 3, 4, 5];
// let addTo = arr.push(7);
// console.log(arr);

//Ans2
// let arr = [1, 2, 3, 4, 5];
// arr.for(let index = 0 ; index >= 0; index++) {
//     arr.push(index);
//     return true;
// }

// console.log(arr);

//Ans3
// let arr=[10,30,45,20,40,56,43,70];
// let newArray = arr.filter((index) => index % 10 === 0);
// console.log(newArray);

//Ans4

// const arr = [10, 20, 30];
// let newArray=arr.map((value) => {
//     return value * value;
// })
// console.log(newArray)

//ans5

let arr=[1,2,3,4,5,6,7,8,9];
let getFactorial=arr.reduce((acc,curr)=>{
    return acc*curr;
},1);
console.log(getFactorial);


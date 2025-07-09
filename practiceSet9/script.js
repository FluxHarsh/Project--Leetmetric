for (i = 1; i <= 1; i++) {
    const obj = { harry: 98, rohan: 70, harsh: 100 };
    console.log(obj);
}

// let getMean = (a, b, c, d, e) => {
//     let ans = (a + b + c + d + e) / 2;
//     return ans;
// }

// console.log(getMean(1, 2, 3, 4, 5));


function getMean(a, b, c, d, e) {
    let ans = (a + b + c + d + e) / 2;
    return ans;
}

console.log(getMean(1, 2, 3, 4, 5));


let luckyNumber = (num) => {
    if (num == 7) {
        console.log("Hurray You entered the corrct number you won a Macbook Pro M4")
    }
    else {
        console.log("Sorry $25K has been detected from your bank account for entering wrong number noob try again for winning the prize")
    }
}

console.log(luckyNumber(7));




let address = "Pune Maharashtra";
console.log(address.replace("Pune", "Ahilyanagar"));




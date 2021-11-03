//Task 3
function sum_of_digits(num){
    let digits = num.toString().split('').map(el => Number(el))
    let sum = digits.reduce((prevValue, currValue) => prevValue + currValue);
    return sum.toString().length === 1 ? sum : sum_of_digits(sum)
}

console.log(sum_of_digits(16))
console.log(sum_of_digits(132189))

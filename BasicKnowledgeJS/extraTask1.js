//Extra task 1
function nextBigger(num){
    let digits = num.toString().split('');
    
    for(let i = digits.length - 1; i >= 0; i--){
        for(let j = i - 1; j >= 0; j--){
            if(digits[i] > digits[j]){
                [digits[i], digits[j]] = [digits[j], digits[i]];
                return Number(digits.join(""));
            }
        }
    }
    return -1;
}

console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(2017))
console.log(nextBigger(9))
console.log(nextBigger(111))
console.log(nextBigger(531))
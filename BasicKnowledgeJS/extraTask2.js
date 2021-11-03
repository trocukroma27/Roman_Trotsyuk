//Extra task 2
function getAddress(num){
    return Math.floor(num / 2 ** 24) + '.' + Math.floor((num % 2 ** 24) / 2 ** 16) + '.' + Math.floor((num % 2 ** 16) / 2 ** 8) + '.' + (num % 2**8);
}

console.log(getAddress(2149583361));
console.log(getAddress(32));
console.log(getAddress(0));
//Task 2
function first_non_repeating_number(str){
    let list_of_chars = str.split('')
    let arr = list_of_chars.filter((el) => {
        if(str.toLowerCase().split(el.toLowerCase()).length === 2){
            return el;
        }
    })
    return arr[0] ? arr[0] : "";
}

console.log(first_non_repeating_number('stress'))
console.log(first_non_repeating_number('sTreSS'))
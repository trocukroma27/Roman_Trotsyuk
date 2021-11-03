//Task 4
function number_of_pairs(arr, target){
    let count = 0;

    arr.forEach((el, i) => {
        for(let j = i + 1; j < arr.length; j++){
            if(el + arr[j] === target){
                count++;
            }
        }
    });

    return count;
}

console.log(number_of_pairs([1, 3, 6, 2, 2, 0, 4, 5], 5)); 
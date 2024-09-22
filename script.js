function findSeven(array) {

    for (let num of array) {
        // console.log(num)
        if (num===7) {
            return "Found!";
        }
    }
    return "there is no 7 in the array";
}

console.log(findSeven([1, 2, 3, 4, 5, 6, ]));  
console.log(findSeven([8, 6, 33, 100]));         
console.log(findSeven([2, 55, 60, 7, 86]));    

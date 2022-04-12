const myArray = [30,30,40,55,223,2049,3024,5];

function valueUnics(arr){
    const mySet = new Set(arr);

    return [...mySet];

}

console.log(valueUnics(myArray))
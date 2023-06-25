const lesserNumberInArray = arr => {
    lesserNumber = arr[0];
    lesserIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lesserNumber) {
            lesserNumber = arr[i];
            lesserIndex = i;
        }
    }
    // arr.splice(lesserIndex, 1)
    return lesserIndex;
}

let arr = [4, 2, 8, 6, 7, 1, 5, 20, 12, 3, 9, 11]

// let arrSplice = arr.splice(4, 1)
// let arrTemp = arr
// console.log(arrSplite);
// console.log(arrTemp);

// console.log(lesserNumberInArray(arr));
let newArray = [];

// while (arr.length != []) {
//     let lesserIndexArray = lesserNumberInArray(arr);
//     newArray.push(arr.splice(lesserIndexArray, 1));
//     console.log(arr);
// }

// console.log(newArray);

const ordenationBySelection = arr => {
    let lesserIndexArray = lesserNumberInArray(arr);
    newArray.push(parseInt(arr.splice(lesserIndexArray, 1)));
    console.log(arr);
    if (arr.length != []) {
        ordenationBySelection(arr);
    }
    return newArray;

}

console.log(ordenationBySelection(arr));
const arrayBidimensional = [[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]]
const arrayJoined = []
const arrayOrdered = []

// const joinArray = arrayBidimensional => {
//     for (let arr = 0; arr < arrayBidimensional.length; arr++) {
//         // console.log(arrayBidimensional[arr]);
//         for (let value = 0; value < arrayBidimensional[arr].length; value++) {
//             console.log(arrayBidimensional[arr][value]);
//         }
//     }
// }
const joinArray = arrayBidimensional => {
    arrayBidimensional.forEach(array => {
        array.forEach(value => arrayJoined.push(value))
    })
    return arrayJoined
}

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

const ordenationBySelection = arrayJoined => {
    let lesserIndexArray = lesserNumberInArray(arrayJoined);
    arrayOrdered.push(parseInt(arrayJoined.splice(lesserIndexArray, 1)));
    // console.log(arrayJoined);
    if (arrayJoined.length != []) {
        ordenationBySelection(arrayJoined);
    }
    return arrayOrdered;

}

joinArray(arrayBidimensional)
console.log(ordenationBySelection(arrayJoined));
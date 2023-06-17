// Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem alterá-lo. Não utilize os métodos como reverse, map, forEach, etc

const reverseArray = array => {
    const arrayReverse = []
    for (let lenght = array.length - 1; lenght >= 0; lenght--)
        arrayReverse.push(array[lenght])

    return arrayReverse
}
console.log(reverseArray(["oh", "hi", "mark"]));
// console.log(reverseArray([60, 50, 40, 30, 20, 10]))

const reverseArray2 = array => {
    const arrayReverse2 = [];
    for (let i = 0; i < array.lenght; i++) {
        arrayReverse2[i] = array[array.lenght - 1 - i]
    }
    return arrayReverse2
}

console.log(reverseArray2([60, 50, 40, 30, 20, 10]))

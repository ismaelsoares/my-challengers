// Escreva uma função que recebe um numero qualquer de números inteiros como argumentos e retorne a média aritimética entre eles

const mediaAritmetica = arrNumber => {
    soma = 0;
    arrNumber.forEach(value => soma += value)
    return soma / arrNumber.length;
}


const mediaAritmetica2 = arrNumber => {
    soma = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        soma += arrNumber[i]
    }
    return soma / arrNumber.length
}

const mediaAritmetica3 = (...numbers) => {
    const sum = numbers.reduce((accum, curr) => accum + curr, 0)
    return sum / numbers.length
}


console.log(mediaAritmetica([1, 2, 5, 4]));
console.log(mediaAritmetica([1, 2, 3, 4]))
console.log(mediaAritmetica([10, 20, 30, 40, 50]))
console.log(mediaAritmetica([15, 5]))
console.log(mediaAritmetica([20]))

console.log(mediaAritmetica3(1, 2, 3, 4))
console.log(mediaAritmetica3(10, 20, 30, 40, 50))
console.log(mediaAritmetica3(15, 5))
console.log(mediaAritmetica3(20))
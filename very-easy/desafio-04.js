// Escreva  uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algorismos e depois concatene o resultado retornando um único número inteiro
const numQuadrado = num => {
    let convertString = num.toString();
    let numberSquare = "";

    for (let i = 0; i < convertString.length; i++) {
        numberSquare += convertString[i] ** 2;
    }
    let convertInt = Number(numberSquare);
    return convertInt;
}

console.log(numQuadrado(25));


//Solução 02


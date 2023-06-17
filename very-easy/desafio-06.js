// Escreva uma função que recebe uma string e retorna cada palavra da string invertida e em letras minúsculas, porém com as palavras na mesma ordem. Assuma que a string não possui nenhuma letra com AuthenticatorAssertionResponse, número ou caractere especial, apenas letras e espaços.

const inverterWord = word => {
    let wordNormalize = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().split(" ");
    let invertedWord = ""
    wordNormalize.forEach(indexWord => {
        for (let i = indexWord.length - 1; i >= 0; i--) {
            invertedWord += indexWord[i];
        }
        invertedWord += " "
    });

    return invertedWord;

}

console.log(inverterWord("Ismael Soares Doria"))
console.log(inverterWord("lorem ipsum dolor sit amet"))
console.log(inverterWord("May the force be with you"))
console.log(inverterWord("It's a trap"))




// for (let indexWord = wordNormalize.length; indexWord >= 0; indexWord--) {
//     invertedWord += (wordNormalize[indexWord]);
// }
// return invertedWord;
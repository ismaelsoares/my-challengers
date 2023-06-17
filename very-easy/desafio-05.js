// Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.
const stringSearch = word => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let wordNormalize = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    let wordSearchLetter = wordNormalize.split("")
    let highLetter = 0;
    for (let indexWord = 0; indexWord < word.length; indexWord++) {
        for (let indexAlphabet = 0; indexAlphabet < alphabet.length; indexAlphabet++) {
            if (wordSearchLetter[indexWord].indexOf(alphabet[indexAlphabet]) != -1)
                if (indexAlphabet > highLetter)
                    highLetter = indexAlphabet;
        }

    }
    return alphabet[highLetter]
}

console.log(stringSearch("Ismael Soares Dória"));


// Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço '-' sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc)
const printChunk = (num) => {
    if (num == 1)
        return "chunk";
    else
        return "chunk-" + printChunk(num - 1)
}

console.log(printChunk(5));
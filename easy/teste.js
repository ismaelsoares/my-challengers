var arr2 = ["Matheus", "João", "Pedro", "Ricardo"];

var indice = arr2.indexOf("Pedro");

arr2.splice(indice, 1);

console.log(arr2); // ["Matheus", "João", "Ricardo"]
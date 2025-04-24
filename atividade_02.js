//01-Crie um programa que declare duas variáveis 
// e exiba o resultado da soma,subtração, multiplicação e divisão desses números.

let variavel_01 = 20;
let variavel_02 = 30;

console.log(variavel_01 + variavel_02);
console.log(variavel_01 - variavel_02);
console.log(variavel_01 * variavel_02);
console.log(variavel_01 / variavel_02);

//02-Declare duas idades e utilize operadores de comparação 
// para verificar se uma pessoa é mais velha que a outra.

let idade1 = 18;
let idade2 = 14;
let resultado = idade1 < idade2 ? "o segundo é mais velho" : "o primeiro é mais velho"
console.log (resultado);

//03- Crie uma variável idade com um número e use o operador ternário para verificar se o valor armazenado
//na variável é maior ou igual a 18. Imprima “Maior de idade” ou “Menor de idade”.

let idade = 20;
let result = idade >= 18 ? "Maior de idade!" : "Menor de idade"
console.log(result);

//04- Crie uma variável com um número e use o operador
// ternário para verificar se é par ou ímpar.

let num = 3;
let resolucao = num % 2 == 0 ? "Par" : "Impar"
console.log(resolucao);
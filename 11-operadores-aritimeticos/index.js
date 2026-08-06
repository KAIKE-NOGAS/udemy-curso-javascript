/**
 * Aritméticos
 * + = Adição / Concatenação ( - / *)
 * - = Subtração
 * / = Divisão 
 * * = Multiplicação
 * ** = Potencialização, elevação
 * % = Resto da divisão
 */

// Concatenação significa unir dados
// Acontece quando une uma String com um valor tipo Number
const num1 = 10;
const num2 = 5;
const num3 = 20
console.log(num1 + num2 + num2 + num2);
// Precedência: Vai calcular primeiro a multiplicação
console.log(num1 + num2 * num3);
// Para mudar, precisa utilizar os '()'
console.log((num1 + num2) * num3)
/**
 * Ranking de Precedência:
 * () - Maior
 * **
 * *
 * / %
 * +
 * -
 */


let contador = 1;
// Operador de incremento = ++
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
// Só vai ser incrementado após o próximo console.log
console.log(contador++);
console.log(contador);
// Se quiser antes, colocar '++' antes da variável
console.log(++contador);
// Operador de decremento --
console.log(--contador);
console.log(--contador);
/**
 * Incremento = ++
 * Decremento = --
 */

let contador3 = 1;
contador3++;
console.log(contador3);

// Jeito errado
console.log(contador++);
console.log(contador);

// Incremento mais de um valor
const passo = 50;
let contador2 = 0;
contador2 = contador2 + passo;
console.log(contador2);
contador2 = contador2 + passo;
console.log(contador2)
contador2 = contador2 + passo;
// Pulando de 50 a 50

// Jeito mais prático
let contador4 = 0;
contador4 += 2; // contador4 = contador4 + 50
contador4 += 2;
contador4 += 2;
console.log(contador4);

// Multiplicação
/**
 * Operadores de Atribuição
 * += -= *= **=
 */
let contador5 = 2;
contador5 *= 2;
contador5 *= 2;
contador5 *= 2;
console.log(contador);

// NaN - Not a number - Nâo conseguiu fazer
const num6 = 10;
let num7 = 'Kaike';
console.log(num6 * num7);

// JavaScript até tenta arrumar o erro
num7 = '5';
console.log(num6 * num7)

const num8 = 10
const num9 = parseInt('5'); // Converte para número inteiro
console.log(typeof num2)

// Para converter, precisa de um parseFloat()
const num10 = parseFloat('5.2');
console.log(typeof(num10));

// Sem distinção entre float e int
const num11 = Number('5');
console.log(num11 + num10);
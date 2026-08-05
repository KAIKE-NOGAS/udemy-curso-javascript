// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes signficativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// Não utilize var, utilize CONST
const nome = 'João';
console.log(nome);

// Sting = Text | Number = Número
const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoDuplicado);

/**
 * Cuidar com variáveis, pois a mesma não obtém histórico,
 * pois como é possível alterar de acordo com o código, é bem possível
 * que possa perder este dado se não for uma constante.
 * Constante = Segurança
 */

// Operadores: + = Soma - = Subtração * = Multiplicação / = Divisão 

// Função typeof - Criada para descrever o tipo de dado
console.log(typeof(primeiroNumero));
console.log(typeof(nome));

// String não é número é texto
let numeroString = '5';

console.log(typeof(numeroString + segundoNumero));
console.log(typeof(primeiroNumero + segundoNumero))
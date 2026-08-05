let nome = 'João'; // Variável tipo string
let nome2; // Declaração de variável
/*
O valor das variáveis pode ser alteradas ao longo
do código
*/

console.log(nome);
console.log(nome, 'João nasceu em 1984');
console.log('Em 2000,', nome, 'conheceu Maria');
console.log(nome,  'casou-se com Maria em 2012');
console.log('Maria teve um filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

nome = 'Pedro'; // Alterando o valor da variável
/**
 * let nome = 'Pedro'
 * Não pode ser feito, por que estou declarando uma variável que já foi
 * declarada ao início do code.
 */
console.log(nome);

// Não podemos criar variáveis com palavras reservadas
// let if;

// Variáveis precisam ter nomes significativos
let nomeCliente = 'ROck';
console.log(nomeCliente);

// Não pode começar o nome de uma variável com um número
// let 1nome;

// Variáveis não podem conter espaços ou traços
// let nome cliente;

// Utilização de camelCase
let nomeCompletoDoCliente = 'Noggas';
console.log(nomeCompletoDoCliente);

// Case-sensitive
// Não utilizar VAR, UTILIZE LET.
nomeCliente = 'Noggas';
let nomecliente = 'Pereira';

console.log(nomeCliente, nomecliente);
// Com 'var' podemos redecralar a variável, sendo uma péssima prática
// ECMAScript 2015 (ES6) (Padronização da linguagem JavaScript)
var nome = 'Luiz';
var nome = 'Pedro';
console.log(nome);

// Péssima prática, não criar variável sem especificação
nome3 = 'Luiz' // Cria variável Global, sendo um perigo para o restante do código
console.log(nome3);

// Não é possível redeclarar a variável
let nome = 'Luiz';
// let nome = 'Otavio';
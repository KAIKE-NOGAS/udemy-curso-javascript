// Dados primitivos: string, number, undefined, Null, boolean, symbol
const nome = 'Kaike'; // String
const nome1 = "Kaike"; // String
const nome2 = `Kaike`; // String
const num1 = 10; // Number
const num2 = 10.52 // Number
let nomeAluno; // Recebe o valor Undefined: Não aponta local na memória
const sobreNomeAluno = null // Nulo -> Não aponta pra local nenhuma na memória
const boolean = true; // VERDADEIRO ou FALSO: No banco de dados é referido a 0 ou 1
const aprovado = false; // Boolean = true, false (lógico

console.log(typeof(sobreNomeAluno), sobreNomeAluno)

// Detalhe importante, após a incrementação no vetor
// 'b', o mesmo copia o valor de a também
// Se deve pelo fato de serem dados de Referência
const a = [1, 2];
const b = a;
console.log(a[0], b);
b.push(3);
console.log(a, b);
/**
 * Os valores '1, 2' não são guardados na variável 'a'
 * A varíavel apenas mostra o endereço desses dados na memoria
 * Quando adicionei a array 'b', a variável 'a' passa o endereço
 * Por isso, ao alterar valor de um, o outro sofre as alterações
 */ 

let ae = 2;
let ba = a;
console.log(ae, ba); // 2, 2

ba = 3;
console.log(ae, ba); // 3, 2


// No JavaScript o Valor Null é descrito como Objeto
// Porém é um erro grave, pois não é um objeto, são diferentes

/**
 * NULO VS UNDEFINED
 * NULO -> Quando não aponta a variável para a memória
 * UNDEFINED -> Não possuí valor
 */
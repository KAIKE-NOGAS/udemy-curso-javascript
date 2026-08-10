alert('Com a nossa mensagem');

// Método na 'Janela' Onde exibe opções de 'OK' ou 'Cancelar'
// Retornando valores 'True' e 'False'.
const $teste = window.confirm('Deseja realmente apagar?');

// Método de input, para receber um valor. 
const $nome = window.prompt('Digite o seu nome:'); 

// Métodos: São quando funções estão dentro de objetos.
/**
 * Por exemplo o Método 'window.confirm', ele é uma função
 * onde está no objeto window (Significa Janela), ou seja, neste caso
 * será chamado de método.
 * Funções: São funcionalidades do código, são chamadas de somente funções
 * quando não se envolvem com objetos.
 */

// Utilizando 'if' para validar resposta
if ($teste === true){
    alert(`Bem vindo(a) ${$nome}!`);
} else {
    alert('Cancelando');
}

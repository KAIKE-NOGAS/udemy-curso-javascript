let resultado = 0;

let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');
num1 = Number(num1);
num2 = Number(num2);

let opcao = window.prompt("Selecione uma opção: 1 - Soma 2 - Subtração 3 - Divisão 4 - Multiplicação.");

switch(opcao){
    case '1':
        resultado = soma(num1, num2);
        alert(`O resultado é: ${resultado}`);
        break;
    case '2':
        resultado = subtracao(num1, num2);
        alert(`O resultado é: ${resultado}`);
        break;
    case '3':
        resultado = divisao(num1, num2);
        alert(`O resultado é: ${resultado}`);
        break;
    case '4':
        resultado = multiplicacao(num1, num2);
        alert(`O resultado é: ${resultado}`);
        break;

    default:
        alert("Número digitado inválido");
        break;
}



function soma(a, b){
    return a + b;
} 
function subtracao(a, b){
    return a - b;
}
function divisao(a, b){
    if(b === 0){
        return alert("Não é possível dividir um número por zero.");
    }
    return a / b;
}
function multiplicacao(a, b){
    return a * b;
}
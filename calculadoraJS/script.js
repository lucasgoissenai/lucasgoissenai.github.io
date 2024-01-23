// Variável para armazenar a expressão atual na calculadora
let currentInput = '0';

// Função para atualizar o visor da calculadora com o valor atual
function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

// Função para limpar o visor e redefinir a expressão para '0'
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

// Função para adicionar um número ao final da expressão atual
function appendNumber(number) {
    // Se a expressão atual for '0', substitua pelo número, senão, concatene o número
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

// Função para adicionar um operador ao final da expressão atual
function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

// Função para calcular o resultado da expressão atual
function calculate() {
    try {
        // Utiliza a função eval() para avaliar a expressão e converte o resultado para string
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        // Em caso de erro durante a avaliação, exibe 'Error' no visor
        currentInput = 'Error';
        updateDisplay();
    }
}

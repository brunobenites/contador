let count = 0;
let interval;
const counterElement = document.getElementById('counter');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Função para iniciar o contador
startBtn.addEventListener('click', () => {
    interval = setInterval(() => {
        count++;
        counterElement.textContent = count;
    }, 1000);
    startConfetti(); // Inicia o efeito de confete
});

// Função para parar o contador
stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});

// Função para resetar o contador
resetBtn.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
    clearInterval(interval);
});

// Função para gerar efeito de confete
function startConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#ff0', '#ff6347', '#32cd32', '#1e90ff', '#f0e68c'],
    });
}

// Efeito de confete ao carregar a página
window.onload = () => {
    startConfetti();
};

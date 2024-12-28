// Definindo a data inicial para o contador
const dataInicial = new Date('2024-07-05T20:00:00');

// Função para atualizar o contador
function atualizarContador() {
    const agora = new Date();
    const tempoDecorrido = agora - dataInicial;

    // Calculando dias, horas, minutos e segundos
    const dias = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoDecorrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoDecorrido % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoDecorrido % (1000 * 60)) / 1000);

    // Atualizando o texto do contador na página
    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

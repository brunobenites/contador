// Lista de fotos
const fotos = [
    'sua-imagem.jpg', // Substitua com o caminho para sua foto
    'foto-namorada.jpg' // Substitua com o caminho para a foto da sua namorada
];

// Variável que controla o índice da foto atual
let indice = 0;

// Função para alternar as fotos
function alternarFotos() {
    indice = (indice + 1) % fotos.length; // Alterna entre os índices 0 e 1
    const imagem = document.getElementById('image');
    
    // Troca a imagem com uma transição suave
    imagem.style.opacity = 0; // Inicia a transição de desvanecimento
    setTimeout(() => {
        imagem.src = fotos[indice]; // Troca a imagem
        imagem.style.opacity = 1; // Finaliza a transição
    }, 1000); // Aguarda 1 segundo antes de trocar a imagem (tempo de transição)
}

// Inicia a alternância a cada 3 segundos
setInterval(alternarFotos, 3000);


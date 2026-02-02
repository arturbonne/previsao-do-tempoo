// Elementos do HTML
const cidadeInput = document.getElementById('cidadeInput');
const buscarBtn = document.getElementById('buscarBtn');
const cidadeNome = document.getElementById('cidadeNome');
const tempMin = document.getElementById('tempMin');
const umidade = document.getElementById('umidade');
const vento = document.getElementById('vento');
const tempMax= document.getElementById('tempMax');
const tempAtual = document.getElementById('tempAtual');

// Evento de clique no botão Buscar
buscarBtn.addEventListener('click', () => {

// Mudar texto da  cidade
cidadeNome.innerText = 'São Paulo';

// Mudar status da tela
cidadeNome.innerText = 'São Paulo';
tempMin.innerText = 16;
tempMax.innerText = 26;
umidade.innerText = 78;
vento.innerText = 15;

clima.textContent = 'Ensolarado';
tempAtual.innerText = 22 + '°C';

});
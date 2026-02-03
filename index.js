// Elementos do HTML
const cidadeInput = document.getElementById('cidadeInput');
const buscarBtn = document.getElementById('buscarBtn');
const cidadeNome = document.getElementById('cidadeNome');

const umidade = document.getElementById('umidade');
const vento = document.getElementById('vento');

const tempMin = document.getElementById('tempMin');
const tempMax= document.getElementById('tempMax');

const clima = document.getElementById('clima');
const tempAtual = document.getElementById('tempAtual');

// Evento de clique no botão Buscar
buscarBtn.addEventListener('click', () => {

// Colocar texto de cidade digitada
const cidadeDigitada = cidadeInput.value.trim();

// Mudar texto da  cidade

if (cidadeDigitada === '') {
    cidadeNome.innerText = 'Digite o nome de uma cidade';
    return;
}  

if (cidadeDigitada.toLowerCase() === 'londres') {
    cidadeNome.innerText = 'Londres';
    tempMin.innerText = 7;
    tempMax.innerText = 15;
    umidade.innerText = 81;
    vento.innerText = 10;
    clima.innerText = 'Nublado';
    tempAtual.innerText = '11 °C';
    return;
}  

// Mudar status da tela
cidadeNome.innerText = cidadeDigitada;

tempMin.innerText = 16;
tempMax.innerText = 26;

umidade.innerText = 78;
vento.innerText = 15;

clima.innerText = 'Ensolarado';
tempAtual.innerText = '22 °C';

});
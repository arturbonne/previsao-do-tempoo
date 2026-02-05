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

const resultado = document.getElementById('resultado');

// Evento de clique no botão Buscar
buscarBtn.addEventListener('click', () => {

// Colocar texto de cidade digitada
const cidadeDigitada = cidadeInput.value.trim();


// Verificar se o campo está vazio
if (cidadeDigitada === '') {
    
// Limpar o campo de entrada
resultado.style.display = 'none';
return;
}

// Mostrar tela denovo
resultado.style.display = 'flex';

// Tela de loading
loading.style.display = 'block';

// Esconder resultado enquanto carrega
resultado.style.display = 'none';

// Simular tempo de carregamento
setTimeout(() => {

// Esconder tela de loading
loading.style.display = 'none';

//mostrar resultado
resultado.style.display = 'flex';

// Mudar status da tela
cidadeNome.innerText = cidadeDigitada;

tempMin.innerText = 16;
tempMax.innerText = 26;

umidade.innerText = 78;
vento.innerText = 15;

clima.innerText = 'Ensolarado';
tempAtual.innerText = '22 °C';


}, 2000); // Simular 2 segundos de carregamento

});

// Botão Enter
cidadeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        buscarBtn.click();
    }
});
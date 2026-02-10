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

const climaIcone = document.getElementById('climaIcone');

// Evento de clique no botão Buscar
buscarBtn.addEventListener('click', async () => {
    
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
    
    // Esconder resultado enquanto carrega
    resultado.style.display = 'none';
    
    // Tela de loading
    loading.style.display = 'block';
    
    // Simular busca de dados (substituir com chamada real à API)
    console.log("Buscando dados...");
       
    await new Promise(resolve => setTimeout(resolve, 2000));
        
    console.log("Dados recebidos!");
    
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



tempAtual.innerText = '22 °C';


clima.innerText = 'clear';


if (clima.innerText.includes('day')) {
    climaIcone.src = './clima/clear_day.svg';
}

else if (clima.innerText.includes('cloudy')) {
    climaIcone.src = './clima/cloud.svg';
}

else if (clima.innerText.includes('rain')) {
    climaIcone.src = './clima/rain.svg';
}

else if (clima.innerText.includes('storm')) {
    climaIcone.src = './clima/storm.svg';
}

else if (clima.innerText.includes('night')) {
    climaIcone.src = './clima/clear_night.svg';
}

else {
    climaIcone.src = './clima/none_day.svg';
}



});

// Botão Enter
cidadeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        buscarBtn.click();
    }
});
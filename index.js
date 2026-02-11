buscarBtn.addEventListener('click', async () => {

const cidadeDigitada = cidadeInput.value.trim();

if (cidadeDigitada === '') {
    resultado.style.display = 'none';
    return;
}

// Mostrar loading
resultado.style.display = 'none';
loading.style.display = 'block';

try {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadeDigitada}&appid=1dac2b284374d2c49bdf936d74b534e2&units=metric&lang=pt_br`);

    // ✅ AQUI entra o response.ok
    if (!response.ok) {
        throw new Error("Cidade não encontrada");
    }

    const data = await response.json();

    // Esconder loading
    loading.style.display = 'none';
    resultado.style.display = 'flex';

    // Atualizar dados reais da API
    cidadeNome.innerText = data.name;
    tempMin.innerText = data.main.temp_min;
    tempMax.innerText = data.main.temp_max;
    umidade.innerText = data.main.humidity;
    vento.innerText = data.wind.speed;
    tempAtual.innerText = data.main.temp + " °C";

    // descrição do clima (ex: Clear, Rain...)
    const descricao = data.weather[0].main.toLowerCase();
    clima.innerText = descricao;

    // Ícones
    if (descricao.includes('clear')) {
        climaIcone.src = './clima/clear_day.svg';
    }
    else if (descricao.includes('cloud')) {
        climaIcone.src = './clima/cloud.svg';
    }
    else if (descricao.includes('rain')) {
        climaIcone.src = './clima/rain.svg';
    }
    else if (descricao.includes('storm')) {
        climaIcone.src = './clima/storm.svg';
    }
    else {
        climaIcone.src = './clima/none_day.svg';
    }
    }
    catch (error) {

    // Esconder loading se der erro
    loading.style.display = 'none';
    resultado.style.display = 'none';

    if (error.message === "Cidade não encontrada") {
        alert("Cidade não encontrada.");
    } else {
    alert("Erro de conexão com o servidor. Verifique sua internet ou tente novamente"); 
    }
}

});

// Botão Enter
cidadeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        buscarBtn.click();
    }
});
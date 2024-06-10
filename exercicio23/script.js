//  Mariane Letícia Souza Moreira 
const apiKey = "89bfd4c3bbf39d1346bc932e0404b418"; // Sua chave de API da OpenWeatherMap
const weatherInfo = document.getElementById("weatherInfo");

function getWeather() {
    const city = document.getElementById("cityInput").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfo.innerHTML = `
            <h2>Previsão do Tempo para ${cityName}</h2>
            <p><strong>Temperatura:</strong> ${temperature}°C</p>
            <p><strong>Descrição:</strong> ${description}</p>
        `;
    })
    .catch(error => {
        console.error("Erro ao obter dados do clima:", error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = "<p>Não foi possível obter a previsão do tempo para essa cidade. Por favor, tente novamente.</p>";
    });
}
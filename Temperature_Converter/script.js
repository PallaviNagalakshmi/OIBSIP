function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultDiv = document.getElementById('result');
    const body = document.body;

    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDiv.innerHTML = 'Please enter a valid number.';
        return;
    }

    if (fromUnit === '' || toUnit === '') {
        resultDiv.innerHTML = 'Please select both units.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;

    // Convert from the input unit to Celsius first
    let temperatureInCelsius;
    switch (fromUnit) {
        case 'Celsius':
            temperatureInCelsius = temperature;
            break;
        case 'Fahrenheit':
            temperatureInCelsius = (temperature - 32) * 5 / 9;
            break;
        case 'Kelvin':
            temperatureInCelsius = temperature - 273.15;
            break;
    }

    // Convert from Celsius to the target unit
    switch (toUnit) {
        case 'Celsius':
            convertedTemperature = temperatureInCelsius;
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperatureInCelsius * 9 / 5) + 32;
            break;
        case 'Kelvin':
            convertedTemperature = temperatureInCelsius + 273.15;
            break;
    }

    // Output the converted temperature
    resultDiv.innerHTML = `Converted temperature: ${convertedTemperature.toFixed(2)}°${toUnit}`;

    // Change background color based on temperature
    if (toUnit === 'Celsius' || toUnit === 'Fahrenheit') {
        if (convertedTemperature > (toUnit === 'Celsius' ? 30 : 86)) {
            body.style.backgroundColor = 'orangered'; // Hot temperature
        } else if (convertedTemperature < (toUnit === 'Celsius' ? 0 : 32)) {
            body.style.backgroundColor = '#00f0ff'; // Cool temperature
        } else {
            body.style.backgroundColor = 'green'; // Neutral temperature
        }
    } else if (toUnit === 'Kelvin') {
        if (convertedTemperature > 303.15) {
            body.style.backgroundColor = 'orangered'; // Hot temperature
        } else if (convertedTemperature < 273.15) {
            body.style.backgroundColor = '#00f0ff'; // Cool temperature
        } else {
            body.style.backgroundColor = 'green'; // Neutral temperature
        }
    }
}

// Input validation for real-time feedback
document.getElementById('temperatureInput').addEventListener('input', function() {
    const temperatureInput = document.getElementById('temperatureInput');
    if (isNaN(temperatureInput.value)) {
        temperatureInput.style.borderColor = 'orangered';
    } else {
        temperatureInput.style.borderColor = '#ccc';
    }
});

const apiKey = '2f31d65e50868c509abde7d3'
const apiUrl = `https://v6.exchangerate-api.com/v6/2f31d65e50868c509abde7d3/latest/JPY`;

async function fetchExchangeRate() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const rate = data.conversion_rates.USD;
    document.getElementById('exchange-rate').textContent = `1 JPY = ${rate} USD`;
    return rate;
}

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const rate = data.conversion_rates.USD;
    const result = amount * rate;
    document.getElementById('result').textContent = `${amount} JPY = ${result.toFixed(2)} USD`;
}

fetchExchangeRate();

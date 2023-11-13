function ConversorMoedas(e) {
    e.preventDefault();

    const Moeda = document.querySelector('#Moedas').value
    const Valor = parseFloat(document.querySelector('#Qnt').value)
    const mostrar = document.querySelector('#Resultado')

    if (isNaN(Valor) || Valor <= 0) {
        alert('Por favor, insira um valor válido para conversão.');
        return;
    }

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
        .then(response => response.json())
        .then(data => {
            const Chave = Moeda.replace("-", "");
            const tax = parseFloat(data[Chave].ask)
            const Conversao = (Valor * tax).toFixed(2)
            mostrar.innerHTML = `Resultado: <h1> ${Conversao} </h1>`

        })
        .catch((error) => {
            console.warn("Erro na requisição", error);
        })
    
}

document.getElementById('Conversor').addEventListener('submit', ConversorMoedas)

function cotacao() {

    const dolar = document.querySelector('#dolar')
    const euro = document.querySelector('#euro')

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL')
    .then(response => response.json())
    .then(data => {

        dolar.textContent = `R$ ${parseFloat(data.USDBRL.ask).toFixed(2)}`
        euro.textContent = `R$ ${parseFloat(data.EURBRL.ask).toFixed(2)}`

    })
    .catch((error) => {
        console.warn("Erro na requisição", error);
    })
}

document.addEventListener('DOMContentLoaded', cotacao)
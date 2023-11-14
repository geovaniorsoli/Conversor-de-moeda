function ConversorMoedas(e) {
    e.preventDefault();

    const Moeda = document.querySelector('#Moedas').value
    const Valor = parseFloat(document.querySelector('#Qnt').value)
    const mostrar = document.querySelector('#Resultado')

    if (isNaN(Valor) || Valor === 0) {
        mostrar.innerHTML = `<h1>R$ 0,00</h1>`;
        return;
    }

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
        .then(response => response.json())
        .then(data => {
            const Chave = Moeda.replace("-", "");
            const tax = parseFloat(data[Chave].ask)
            const Conversao = (Valor * tax).toFixed(2)
            mostrar.innerHTML = ` <h1> R$ ${Conversao} <h1>`

        })
        .catch((error) => {
            console.warn("Erro na requisição", error);
        })
    
}


document.getElementById('Conversor').addEventListener('input', ConversorMoedas)

function cotacao() {

    const dolar = document.querySelector('#dolar')
    const euro = document.querySelector('#euro')

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL')
    .then(response => response.json())
    .then(data => {

        dolar.textContent = `USD ${parseFloat(data.USDBRL.ask).toFixed(2)}`
        euro.textContent = `EUR ${parseFloat(data.EURBRL.ask).toFixed(2)}`

    })
    .catch((error) => {
        console.warn("Erro na requisição", error);
    })
}

setInterval(1000, cotacao())
document.addEventListener('DOMContentLoaded', cotacao)
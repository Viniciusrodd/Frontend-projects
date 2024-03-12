



function avançou() {
    let avançar = document.getElementById('avançar')
    let carrosel = document.getElementById('cardscarrosel')

    if(avançar = true){
        carrosel.style.backgroundImage = "url('../imagens/bitcoin.jpg')"
    }
}

function rolar() {
    let botão1 = document.getElementById('bheader1')

    if(botão1 = true){
        window.scrollTo({
            top: 950,
            behavior: 'smooth'
        })
    }
}

function rolar2() {
    let botão2 = document.getElementById('bheader2')

    if(botão2 = true){
        window.scrollTo({
            top: 3600,
            behavior: 'smooth'
        })
    }
}

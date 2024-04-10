

let cardsCarrosel = document.getElementById('cardscarrosel')
let divCor = document.getElementById('cor')
let p = document.getElementById('modeloP5')
let currentItem = 0

let arrayObject = [
    {
        id: 1,
        cor: 'green',
        info: 'blablabla111',
    },
    {
        id: 2,
        cor: 'orange',
        info: 'blablabla222',
    },
    {
        id:3,
        cor: 'black',
        info: 'blablabla333'
    }
]

window.addEventListener('DOMContentLoaded', function() {
    showItems()
})

function showItems() {
    let item = arrayObject[currentItem]

    divCor.style = item.cor
    p.textContent = item.info
}

function clicou() {
    currentItem++

    if(currentItem > arrayObject.length - 1){
        currentItem = 0
    }
    showItems()
}


function clicouSpan() {
    let menu = document.getElementById('pSpan')
    let botão1 = document.getElementById('bheader1')
    let botão2 = document.getElementById('bheader2')
    
    if(clicouSpan){
       menu.style.display = 'none'
        botão1.style.display = 'inline'
        botão2.style.display = 'inline'
    }
}


function rolar() {
    let botão1 = document.getElementById('bheader1')
    if(botão1 = true){
        let aula = document.getElementById('aula')
            aula.scrollIntoView({
                behavior: "smooth"
            })
    }
}

function rolar2() {
    let botão2 = document.getElementById('bheader2')
    if(botão2 = true){
        let biografia = document.getElementById('modeloS3')
            biografia.scrollIntoView({
                behavior: "smooth"
            })
    }
}

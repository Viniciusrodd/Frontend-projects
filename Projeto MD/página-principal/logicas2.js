

function clicouSpan() {
    let menu = document.getElementById('pSpan')
    let botão1 = document.getElementById('bheader1')
    let botão2 = document.getElementById('bheader2')
    
    if(clicouSpan = true){
        menu.style.display = 'none'
        menu.style.transform = 'rotate(90deg)'
        botão1.style.display = 'block'
        botão2.style.display = 'block'
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

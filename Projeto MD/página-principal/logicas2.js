

function mouseEntrou() {
    let header = document.getElementById('hh')

    if(mouseEntrou){
        header.style.backgroundColor = 'rgba(255, 255, 78, 0.582)'
    }

        header.addEventListener('mouseleave', sair)
        function sair() {
            
            if(sair){
                header.style.backgroundColor = 'rgb(28, 28, 28)'
            }
        }
}


function clicou() {
    let iframe = document.getElementById('iframeID')
    
    if(clicou){
        iframe.style.visibility = 'visible'
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

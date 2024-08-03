

let sobreBtt = document.getElementById('sobre')
let beneficiosBtt = document.getElementById('beneficios')
let resultadosBtt = document.getElementById('resultados')
let entregaBtt = document.getElementById('entrega')
let iniciarBtt = document.getElementById('btt-conteudo-1')
let comprarAgora1Btt = document.getElementById('btt-compraragora-1')
let comprarAgora2Btt = document.getElementById('btt-compraragora-2')

sobreBtt.addEventListener('click', () =>{
    if(sobreBtt){
        let sobreConteudo = document.getElementById('container-argumentos')
        sobreConteudo.scrollIntoView({
            behavior: "smooth"
        })
    }
})


beneficiosBtt.addEventListener('click', () =>{
    let beneficiosConteudo = document.getElementById('container-produto')
    beneficiosConteudo.scrollIntoView({
        behavior: 'smooth'
    })
})


resultadosBtt.addEventListener('click', () =>{
    let resultadosConteudo = document.getElementById('div-resultados')
    resultadosConteudo.scrollIntoView({
        behavior: 'smooth'
    })
})


entregaBtt.addEventListener('click', () =>{
    let entregaConteudo = document.getElementById('container-footer-6')
    entregaConteudo.scrollIntoView({
        behavior: 'smooth'
    })
})


iniciarBtt.addEventListener('click', () =>{
    let iniciarConteudo = document.getElementById('sessao-conteudo-1')
    iniciarConteudo.scrollIntoView({
        behavior: 'smooth'
    })
})


var cardsCompras = document.getElementById('container-cards-compras')
comprarAgora1Btt.addEventListener('click', () =>{
    cardsCompras.scrollIntoView({
        behavior: 'smooth'
    })
})


comprarAgora2Btt.addEventListener('click', () =>{
    cardsCompras.scrollIntoView({
        behavior: 'smooth'
    })
})
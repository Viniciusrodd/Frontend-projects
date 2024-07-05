

let sobreBtt = document.getElementById('sobre')
let beneficiosBtt = document.getElementById('beneficios')
let resultadosBtt = document.getElementById('resultados')
let entregaBtt = document.getElementById('entrega')


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
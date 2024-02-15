function enviar() {
    let nome = String(document.getElementById('inome').value)
    let res = document.getElementById('resposta')

    res.style.fontSize = '16px'
    res.style.textAlign = 'center'
    res.style.fontWeight = 'bold'
    res.innerHTML = `Obrigado por se cadastrar ${nome.toUpperCase()}, entraremos em contato`
}
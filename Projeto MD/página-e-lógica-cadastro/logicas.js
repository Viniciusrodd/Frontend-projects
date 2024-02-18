function enviar() {
    let nome = String(document.getElementById('inome').value)
    let email = String(document.getElementById('iemail').value)
    let res = document.getElementById('resposta')

        res.style.fontSize = '16px'
        res.style.textAlign = 'center'
        res.style.fontWeight = 'bolder'

        if(nome == ''){
            res.innerHTML = `Houve um erro`
        } else{
            res.innerHTML = `Obrigado por se cadastrar ${nome.toUpperCase()}, entraremos em contato`
        }
}
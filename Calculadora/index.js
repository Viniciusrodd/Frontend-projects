const visor = document.getElementById('visor')

//Parâmetro de input porque estavamos passando um caractere quando chamamos esta função
function clicou(input) {
    visor.value += input
}

function limpou() {
    visor.value = ""
}

function calculo(params) {
    try{
        visor.value = eval(visor.value)
    }
    catch(error){
        visor.value = 'Erro'
    }
}
//A função Eval avalia o expressão de cadeia de caracteres e retorna seu valor.
//O bloco try é usado para envolver um trecho de código onde se espera que uma exceção possa ocorrer.
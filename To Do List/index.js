

function adicionar() {
    let botão = document.querySelectorAll('#btt')
    let tarefa = String(document.getElementById('itar').value)
    let res = document.getElementById('resposta')
    var NE = document.createElement('li')
    res.appendChild(NE)
    

    if(btt = true){
        
        NE.textContent = tarefa
    }

    if(tarefa == '0' || tarefa == ''){
        window.alert('Houve um erro, Por favor adicione só tarefas!')
    }
}
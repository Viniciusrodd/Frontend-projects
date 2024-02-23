

function adicionar() {
    let tarefa = String(document.getElementById('itar').value)
    let res = document.getElementById('resposta')
    var NE = document.createElement('li')
    res.appendChild(NE)
    
    
    NE.textContent = tarefa

    if(tarefa == '0'){
        window.alert('Houve um erro, Por favor adicione só tarefas!')
    }
}
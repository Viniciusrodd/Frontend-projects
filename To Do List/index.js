

    function adicionar() {
        let array = []

        let botão = document.querySelectorAll('#botaoAdicionar')
        let tarefaInput = String(document.getElementById('itar').value)
        let res = document.getElementById('resposta')
        var NE = document.createElement('li')
        res.appendChild(NE)

            if(botão = true){ 
                NE.textContent = tarefaInput
                array += tarefaInput
            }
        
            if(array[tarefaInput] == '0' || array[tarefaInput] == ''){
                window.alert('Preencha o campo apenas com tarefas, por favor reinicie!')
                res.innerHTML = ''
                NE.innerHTML = ''
            }
    }



    function adicionar() {
        let array = []

        let botão = document.querySelectorAll('#botaoAdicionar')
        let tarefaInput = String(document.getElementById('itar').value)
        let res = document.getElementById('pResposta')
        var NovoElemento = document.createElement('li')
        res.appendChild(NovoElemento)

        //ADICIONAR TAREFA
            if(botão = true){ 
                NovoElemento.textContent = tarefaInput
                array += tarefaInput
            }

        //VALIDAÇÕES:
            if(array[tarefaInput] == '0' || array[tarefaInput] == ''){
                window.alert('Preencha o campo apenas com tarefas, por favor reinicie!')
                res.innerHTML = ''
                NovoElemento.innerHTML = ''
            }
    }

    function remover() {
        let res = document.getElementById('pResposta')
        let bRemover = document.querySelectorAll('#botaoRemover')

    //REMOVER TAREFA 
        if(bRemover){
            res.innerHTML = ''
        }
    }

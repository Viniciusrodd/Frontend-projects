
/*
function clicouSpan() {
    let menu = document.getElementById('pSpan')
    let botão1 = document.getElementById('bheader1')
    let botão2 = document.getElementById('bheader2')
    let divBotoes = document.getElementById('botoes')
        if(clicouSpan = true){
            menu.style.display = 'none'
            divBotoes.style.display = 'block'
            botão1.style.display = 'block'
            botão2.style.display = 'block'
        }
}
*/
function cadastroNovidades() {
    var formNovidades = document.getElementById('form-novidades');
    var botao = document.getElementById('button-login')

    botao.addEventListener('click', () => {

        var nomeInput = document.getElementById('inome').value;
        var numeroInput = document.getElementById('inumero').value;

        if (nomeInput === '' || numeroInput === '') {
            alert('Por favor, preencha nome e número.');
        } else {
            alert('Obrigado. Entraremos em contato!');
            location.reload(); //Recarrega a página
        }
    });
}
cadastroNovidades();



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
        let biografia = document.getElementById('biografia')
            biografia.scrollIntoView({
                behavior: "smooth"
            })
    }
}

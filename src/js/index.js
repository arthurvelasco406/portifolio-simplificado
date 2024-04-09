/*
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

    Passo 1 - pegar o botão "mostrar mais" no JS pra poder verificar quando o usuário clicar em cima dele 

    Passo 2 - identificar o clique no botão 

    Passo 3 - adicionar a classe ativo nos projetos escondidos 


- Objetivo 2 - esconder o botão de mostrar mais 

    Passo 1 - pegar o botão e esconder ele 
*/

//O querySelector busca apeas um elemnto que tem a classe.
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
//Já o querySelectorAll vai trazer todos os elementos com a classe.
//Ele irá pegar os elementos com 'projetos' PORÉM não pega os que também possuem a classe 'ativos'.
//Porém = :
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {

    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

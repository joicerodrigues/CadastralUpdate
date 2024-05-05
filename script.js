const formulario = document.getElementById('formulario-atualizacao');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const endereco = document.getElementById('endereco').value;
    const biografia = document.getElementById('biografia').value;

    atualizarInformacoesUsuario(nome, idade, endereco, biografia);
});

function atualizarInformacoesUsuario(nome, idade, endereco, biografia) {
    const secaoInformacoes = document.querySelector('.secao-informacoes-usuario');
  
    secaoInformacoes.querySelector('h2').textContent = `Nome: ${nome}`;
    secaoInformacoes.querySelector('p:nth-child(2)').textContent = `Idade: ${idade} anos`;
    secaoInformacoes.querySelector('p:nth-child(3)').textContent = `Endereço: ${endereco}`;
    secaoInformacoes.querySelector('p:nth-child(4)').textContent = `Biografia: ${biografia}`;
  }
  
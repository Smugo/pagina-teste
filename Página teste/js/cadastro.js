document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let cpf = document.getElementById('cpf').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let nomeErro = document.getElementById('nomeErro');
    let sobrenomeErro = document.getElementById('sobrenomeErro');
    let cpfErro = document.getElementById('cpfErro');
    let telefoneErro = document.getElementById('telefoneErro');
    let emailErro = document.getElementById('emailErro');
    let senhaErro = document.getElementById('senhaErro');

    nomeErro.textContent = nome ? '' : 'Nome é obrigatório';
    sobrenomeErro.textContent = sobrenome ? '' : 'Sobrenome é obrigatório';
    cpfErro.textContent = cpf.match(/^[0-9]{11}$/) ? '' : 'CPF inválido';
    telefoneErro.textContent = telefone.match(/^[0-9]{10,11}$/) ? '' : 'Telefone inválido';
    emailErro.textContent = email ? '' : 'Email é obrigatório';
    senhaErro.textContent = senha ? '' : 'Senha é obrigatória';

    if (nomeErro.textContent || sobrenomeErro.textContent || cpfErro.textContent || telefoneErro.textContent || emailErro.textContent || senhaErro.textContent) {
        event.preventDefault();
    }
});
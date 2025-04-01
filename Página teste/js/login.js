document.addEventListener('DOMContentLoaded', function() {
    const botaoLogin = document.getElementById('botaoLogin');

    botaoLogin.addEventListener('click', function() {
        const usuarioInput = document.getElementById('usuario');
        const senhaInput = document.getElementById('senha');
        const usuario = usuarioInput.value;
        const senha = senhaInput.value;

        if (usuario && senha) {
            usuarioInput.classList.remove('invalido');
            usuarioInput.classList.add('valido');
            senhaInput.classList.remove('invalido');
            senhaInput.classList.add('valido');
            alert('Login bem-sucedido!');
        } else {
            if (!usuario) {
                usuarioInput.classList.remove('valido');
                usuarioInput.classList.add('invalido');
            }
            if (!senha) {
                senhaInput.classList.remove('valido');
                senhaInput.classList.add('invalido');
            }
            alert('Usuário e senha são obrigatórios.');
        }
    });
});
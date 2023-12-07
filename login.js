const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuarioLogin = document.getElementById('usuarioLogin').value;
    const senhaLogin = document.getElementById('senhaLogin').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.emailCadastro === usuarioLogin && usuario.senhaCadastro === senhaLogin) {
      alert('Login realizado com sucesso!');
      form.reset();
      location.href = 'sobre.html';
    } else {
      alert('Email ou senha incorretos.');
    }
    
  });
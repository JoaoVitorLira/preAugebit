
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const nomeCadastro = document.getElementById('nomeCadastro').value;
    const cpfCadastro = document.getElementById('cpfCadastro').value;
    const emailCadastro = document.getElementById('emailCadastro').value;
    const telefoneCadastro = document.getElementById('telefoneCadastro').value;
    const senhaCadastro = document.getElementById('senhaCadastro').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    const usuario = {nomeCadastro:nomeCadastro, cpfCadastro:cpfCadastro, emailCadastro:emailCadastro, telefoneCadastro:telefoneCadastro, senhaCadastro:senhaCadastro}
    localStorage.setItem('usuario', JSON.stringify(usuario))
    
    alert("Seja bem vindo!")
})
function gerarSenha() {
  let caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let comprimentoSenha = 10;
  let senha = "";

  for (let i = 0; i < 10; i++) {
    let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }
  document.getElementById("senhaInput").value = senha;
}

function copyPassword() {
  var senha = document.getElementById("senhaInput").value;
}

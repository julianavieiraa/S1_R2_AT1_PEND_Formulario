const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");


const form = document.getElementsByTagName("form")[0];
const nome = document.getElementById("nome");
const senha = document.getElementById("senha");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});


nome.addEventListener("input", () => {
  nome.value = nome.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "");
  console.log(nome.value);
});

senha.addEventListener("input", () => {
  if (senha.value.length < 10) {
    console.log("A senha precisa ter no mínimo 10 caracteres");
  }

  if (!/[A-Z]/.test(senha.value)) {
    console.log("A senha precisa ter uma letra maiúscula");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkNome()) {
    console.log("Nome inválido, ele precisa ter mais de 5 caracteres");
    return;
  }

  if (checkSenha()) {
    console.log("Senha inválida");
    return;
  }

  console.log("Formulário ENVIADO");
});

const checkNome = () => {
  return nome.value.length <= 5;
};

const checkSenha = () => {
  return senha.value.length < 10 || !/[A-Z]/.test(senha.value);
};









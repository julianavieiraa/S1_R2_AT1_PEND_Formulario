const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");

const formLogin = document.getElementsByTagName("form")[0];
const nomeLogin = document.getElementById("nome");
const senhaLogin = document.getElementById("senha");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

nomeLogin.addEventListener("input", () => {
  nomeLogin.value = nomeLogin.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "");
  removeErroLogin(nomeLogin);
});

senhaLogin.addEventListener("input", () => {
  removeErroLogin(senhaLogin);
});

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  limparErrosLogin();

  if (nomeLogin.value.trim() === "") {
    setErroLogin(nomeLogin, "Preencha o nome");
    return;
  }

  if (checkNomeLogin()) {
    setErroLogin(nomeLogin, "Nome inválido");
    return;
  }

  if (senhaLogin.value.trim() === "") {
    setErroLogin(senhaLogin, "Preencha a senha");
    return;
  }

  if (senhaLogin.value.length < 10) {
    setErroLogin(senhaLogin, "A senha precisa ter 10 caracteres");
    return;
  }

  if (!/[A-Z]/.test(senhaLogin.value)) {
    setErroLogin(senhaLogin, "A senha precisa ter 1 letra maiúscula");
    return;
  }

  if (!/\d/.test(senhaLogin.value)) {
    setErroLogin(senhaLogin, "A senha precisa ter 1 número");
    return;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(senhaLogin.value)) {
    setErroLogin(senhaLogin, "A senha precisa ter 1 caractere especial");
    return;
  }

  alert("Login realizado com sucesso!");
  formLogin.reset();
  limparErrosLogin();
});

const checkNomeLogin = () => {
  return nomeLogin.value.trim().length <= 5;
};

const setErroLogin = (input, mensagem) => {
  const parent = input.parentElement;
  let small = parent.querySelector("small");

  if (!small) {
    small = document.createElement("small");
    parent.appendChild(small);
  }

  small.innerText = mensagem;
  small.style.color = "red";
  input.style.border = "2px solid red";
};

const removeErroLogin = (input) => {
  const parent = input.parentElement;
  const small = parent.querySelector("small");

  if (small) {
    small.innerText = "";
  }

  input.style.border = "2px solid #ccc";
};

const limparErrosLogin = () => {
  const inputs = document.querySelectorAll(".form__box.login .input__box input");

  inputs.forEach((input) => {
    removeErroLogin(input);
  });
};
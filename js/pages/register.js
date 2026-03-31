const formRegister = document.getElementsByTagName("form")[1];
const nomeRegister = document.getElementById("nomeRegister");
const emailRegister = document.getElementById("email");
const senhaRegister = document.getElementById("senhaRegister");
const confirmarSenhaRegister = document.getElementById("senhaConfirm");
const idadeRegister = document.getElementById("idade");
const cpfRegister = document.getElementById("cpf");

nomeRegister.addEventListener("input", () => {
    nomeRegister.value = nomeRegister.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "");
    removeErroRegister(nomeRegister);
});

idadeRegister.addEventListener("input", () => {
    let valor = idadeRegister.value.replace(/\D/g, "");

    if (valor.length > 3) {
        valor = valor.slice(0, 3);
    }

    idadeRegister.value = valor;
    removeErroRegister(idadeRegister);
});

cpfRegister.addEventListener("input", () => {
    let valor = cpfRegister.value.replace(/\D/g, "");

    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }

    if (valor.length > 9) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    } else if (valor.length > 6) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (valor.length > 3) {
        valor = valor.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }

    cpfRegister.value = valor;
    removeErroRegister(cpfRegister);
});

emailRegister.addEventListener("input", () => {
    removeErroRegister(emailRegister);
});

senhaRegister.addEventListener("input", () => {
    removeErroRegister(senhaRegister);
});

confirmarSenhaRegister.addEventListener("input", () => {
    removeErroRegister(confirmarSenhaRegister);
});

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    limparErrosRegister();

    if (nomeRegister.value.trim() === "") {
        setErroRegister(nomeRegister, "Preencha o nome");
        return;
    }

    if (checkNomeRegister()) {
        setErroRegister(nomeRegister, "Nome inválido");
        return;
    }

    if (emailRegister.value.trim() === "") {
        setErroRegister(emailRegister, "Preencha o e-mail");
        return;
    }

    if (checkEmailRegister()) {
        setErroRegister(emailRegister, "E-mail inválido");
        return;
    }

    if (senhaRegister.value.trim() === "") {
        setErroRegister(senhaRegister, "Preencha a senha");
        return;
    }

    if (senhaRegister.value.length < 10) {
        setErroRegister(senhaRegister, "A senha precisa ter 10 caracteres");
        return;
    }

    if (!/[A-Z]/.test(senhaRegister.value)) {
        setErroRegister(senhaRegister, "A senha precisa ter 1 letra maiúscula");
        return;
    }

    if (!/\d/.test(senhaRegister.value)) {
        setErroRegister(senhaRegister, "A senha precisa ter 1 número");
        return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senhaRegister.value)) {
        setErroRegister(senhaRegister, "A senha precisa ter 1 caractere especial");
        return;
    }

    if (confirmarSenhaRegister.value.trim() === "") {
        setErroRegister(confirmarSenhaRegister, "Confirme a senha");
        return;
    }

    if (checkConfirmarSenhaRegister()) {
        setErroRegister(confirmarSenhaRegister, "As senhas não coincidem");
        return;
    }

    if (idadeRegister.value.trim() === "") {
        setErroRegister(idadeRegister, "Preencha a idade");
        return;
    }

    if (checkIdadeRegister()) {
        setErroRegister(idadeRegister, "Idade inválida");
        return;
    }

    if (cpfRegister.value.trim() === "") {
        setErroRegister(cpfRegister, "Preencha o CPF");
        return;
    }

    if (checkCpfRegister()) {
        setErroRegister(cpfRegister, "CPF inválido");
        return;
    }

    alert("Cadastro criado com sucesso!");
    formRegister.reset();
    limparErrosRegister();
});

const checkNomeRegister = () => {
    return nomeRegister.value.trim().length <= 5;
};

const checkEmailRegister = () => {
    return !/\S+@\S+\.\S+/.test(emailRegister.value);
};

const checkSenhaRegister = () => {
    return (
        senhaRegister.value.length < 10 ||
        !/[A-Z]/.test(senhaRegister.value) ||
        !/\d/.test(senhaRegister.value) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(senhaRegister.value)
    );
};

const checkConfirmarSenhaRegister = () => {
    return senhaRegister.value !== confirmarSenhaRegister.value;
};

const checkIdadeRegister = () => {
    return Number(idadeRegister.value) < 18;
};

const checkCpfRegister = () => {
    return cpfRegister.value.replace(/\D/g, "").length !== 11;
};

const setErroRegister = (input, mensagem) => {
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

const removeErroRegister = (input) => {
    const parent = input.parentElement;
    const small = parent.querySelector("small");

    if (small) {
        small.innerText = "";
    }

    input.style.border = "2px solid #ccc";
};

const limparErrosRegister = () => {
    const inputs = document.querySelectorAll(".input__box input");

    inputs.forEach((input) => {
        removeErroRegister(input);
    });
};
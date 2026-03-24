const formRegister = document.getElementsByTagName("form")[1];
const nomeRegister = document.getElementById("nomeRegister");
const emailRegister = document.getElementById("email");
const senhaRegister = document.getElementById("senhaRegister");
const confirmarSenhaRegister = document.getElementById("senhaConfirm");
const idadeRegister = document.getElementById("idade");
const cpfRegister = document.getElementById("cpf");

nomeRegister.addEventListener("input", () => {
    nomeRegister.value = nomeRegister.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "");
    console.log(nomeRegister.value);
});

idadeRegister.addEventListener("input", () => {
    let valor = idadeRegister.value.replace(/\D/g, "");

    if (valor.length > 3) {
        valor = valor.slice(0, 3);
    }

    idadeRegister.value = valor;
    console.log(idadeRegister.value);
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
    console.log(cpfRegister.value);
});

senhaRegister.addEventListener("input", () => {
    if (senhaRegister.value.length < 10) {
        console.log("A senha precisa ter no mínimo 10 caracteres");
    }

    if (!/[A-Z]/.test(senhaRegister.value)) {
        console.log("A senha precisa ter uma letra maiúscula");
    }
});

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkNomeRegister()) {
        console.log("Nome inválido, ele precisa ter mais de 5 caracteres");
        return;
    }

    if (checkEmailRegister()) {
        console.log("E-mail inválido");
        return;
    }

    if (checkSenhaRegister()) {
        console.log("Senha inválida");
        return;
    }

    if (checkConfirmarSenhaRegister()) {
        console.log("Confirmação incorreta");
        return;
    }

    if (checkIdadeRegister()) {
        console.log("Idade inválida, precisa ser maior ou igual a 18");
        return;
    }

    if (checkCpfRegister()) {
        console.log("CPF inválido, precisa ter 11 números");
        return;
    }

    alert("Cadastro criado com sucesso!");
});

const checkNomeRegister = () => {
    return nomeRegister.value.length <= 5;
};

const checkEmailRegister = () => {
    return !/\S+@\S+\.\S+/.test(emailRegister.value);
};

const checkSenhaRegister = () => {
    return senhaRegister.value.length < 10 || !/[A-Z]/.test(senhaRegister.value);
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


// if (checkEmailRegister()) {
//     setErro(emailRegister, "E-mail inválido");
//     return;
// } else {
//     removeErro(emailRegister);
// }

// if (checkSenhaRegister()) {
//     setErro(senhaRegister, "Senha fraca");
//     return;
// } else {
//     removeErro(senhaRegister);
// }

// if (checkConfirmarSenhaRegister()) {
//     setErro(confirmarSenhaRegister, "Senhas não coincidem");
//     return;
// } else {
//     removeErro(confirmarSenhaRegister);
// }
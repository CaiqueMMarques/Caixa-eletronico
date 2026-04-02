let balanceDisplay = document.querySelector(".sale");
const depositInput = document.querySelector(".input-deposit");
const withdrawInput = document.querySelector(".sake");
const depositButton = document.querySelector(".deposit-button");
const sakeButton = document.querySelector(".remove-button");

const saldo = [100, 50, 50, 20, 20, 10, 5, 2, 1];
let saldoTotal = 0;

for (let i = 0; i < saldo.length; i++) {
    saldoTotal += saldo[i];
}
balanceDisplay.textContent = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format (saldoTotal)


depositButton.addEventListener("click", () => {

    const valor = Number(depositInput.value) 
    saldoTotal += valor

    balanceDisplay.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(saldoTotal)
    alert("Depósito realizado com sucesso!")
    depositInput.value = ""
})

sakeButton.addEventListener("click", () => {
    const dinheiro = Number(withdrawInput.value)

    if (dinheiro <= saldoTotal) {
        const valor = dinheiro
        saldoTotal -= valor

        balanceDisplay.textContent = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(saldoTotal)
        alert("Saque realizado com sucesso!")
        withdrawInput.value = ""
    } else {
        alert("Saldo insuficiente!")
    }
})

/* segunda ideia de código depois de ter aprendido novas ideias de cleanCode*/

// let balanceDisplay = document.querySelector(".sale");
// const depositInput = document.querySelector(".input-deposit");
// const withdrawInput = document.querySelector(".sake");
// const depositButton = document.querySelector(".deposit-button");
// const sakeButton = document.querySelector(".remove-button");

// let saldoTotal = 300;
// balanceDisplay.textContent = formatarMoeda(saldoTotal)

// function formatarMoeda(valor) {
//     return new Intl.NumberFormat("pt-BR", {
//         style: "currency",
//         currency: "BRL"
//     }).format(valor)
// }

// function atualizarSaldo() {
//     balanceDisplay.textContent = formatarMoeda(saldoTotal)
// }

// function depositar(valor) {
//     saldoTotal += valor
// }

// function sacar(valor) {
//     saldoTotal -= valor
// }

// depositButton.addEventListener("click", () => {
//     const valor = Number(depositInput.value)

//     if (isNaN(valor) || valor <= 0) {
//         alert("Digite um valor válido!")
//         return
//     }

//     depositar(valor)
//     atualizarSaldo()

//     depositInput.value = ""
// })

// sakeButton.addEventListener("click", () => {
//     const valor = Number(withdrawInput.value)

//     if (isNaN(valor) || valor <= 0) {
//         alert("Valor inválido!")
//         return
//     }

//     if (valor > saldoTotal) {
//         alert("Saldo insuficiente!")
//         return
//     }

//     sacar(valor)
//     atualizarSaldo()

//     withdrawInput.value = ""
// })

// atualizarSaldo()


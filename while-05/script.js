let saldo = 1000; // Saldo inicial

while (saldo > 0) {
    alert("Saldo atual: R$  " + saldo.toFixed(2));
    // alert(`Saldo atual: R$ ${saldo.toFixed(2)}`);
    let saque = parseFloat(prompt("Quanto deseja sacar?"));

    if (saque > saldo) {
        alert("Saldo insuficiente! Tente um valor menor.");
        continue; // Volta para o início do loop
    }

    if (saque <= 0) {
        alert("Valor inválido.");
        continue;
    }

    saldo -= saque;
    alert("Saque realizado com sucesso!");

    if (saldo <= 0) {
        alert("Saldo esgotado. Encerrando.");
    }
}
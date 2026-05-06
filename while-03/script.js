let total = 0; // Esta variável "acumula" os valores
let valor = -1;
while (valor !== 0) {
    valor = parseFloat(prompt("Digite o valor do produto (ou 0 para encerrar):"));
    if (valor > 0) {
        total = total + valor;
    }
}
alert("O valor total da sua compra é: R$ " + total.toFixed(2));

let i = parseFloat(prompt("Digite um número positivo"));

while (i < 0) {
    i = parseFloat(prompt("Valor invalído! Por favor, digite um número positivo"))
}
alert(`Obrigado por inserir um numero positivo: ${i}`)
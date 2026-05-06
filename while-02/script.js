let soma = 0;
let contador = 0;
let nota = 0;

while (nota >= 0) {
    nota = parseFloat(prompt("Digite uma nota de (0 a 10): (digite um numero negativo para sair!)"));
    
    if (nota >= 0 && nota <= 10) {
        soma += nota;
        contador++;
    }  else if (nota < 10) {
        alert("Nota inválida, digite apenas números até 10");
    }  
}

if (i > 0) {
    let media = soma / i;
    alert(`Media = ${media.toFixed(2)} (${1} notas foram inseridas)`);
} else {
    alert("Nenhuma nota valida inserida!")
}

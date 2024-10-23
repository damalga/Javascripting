const numero = 7;

function factorial(n) {
    // Caso base: si n es 1, el factorial de 1 es 1
    if (n === 1) {
        return 1;
    }
    // Llamada recursiva: n * factorial de n - 1
    return n * factorial(n - 1);
}

const resultado = factorial(numero);
document.querySelector('#factorial').textContent = `El factorial de ${numero} es: ${resultado}`;
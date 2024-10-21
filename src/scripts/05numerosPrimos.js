// ¿Que es un número primo?
// Aquel que solo es divisible por sí mismo y por 1 (ejemplo: 2, 3, 5, 7, 11...)
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function esPrimo(num) {
    // Este condicional no es estrictamente necesario!
    // Los números menores o iguales a 1 no son primos
    if (num <= 1) return false;
    
    // Este condicional no es estrictamente necesario!
    // El 2 es el único número primo par, solo es divisible por 1 y por sí mismo
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Si encontramos un divisor, no es primo
        }
    }
    return true; // Si encontramos divisor, es primo
}

function filtrarPrimos(arr) {
    return arr.filter(esPrimo);
}

const primos = filtrarPrimos(numeros);
document.querySelector('#primos').innerHTML = primos;
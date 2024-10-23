const numeros = [1,9,2,8,3,7,6,4,20,15,4,6,3,7,2,8,1,9];

function calcularMediana() {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    console.log(numerosOrdenados);
    if (numerosOrdenados.length % 2 !== 0){
        // Si el array tiene un número impar de elementos, tomamos el valor central
        const mid = Math.floor(numerosOrdenados.length / 2);
        return numerosOrdenados[mid];
    } else {
        // Si el array tiene un número par de elementos, tomamos los dos valores centrales y calculamos el promedio
        const mid1 = numerosOrdenados.length / 2;
        const mid2 = numerosOrdenados.length / 2 - 1;
        return (numerosOrdenados[mid1] + numerosOrdenados[mid2]) / 2;
    }
}

const resultado = calcularMediana(numeros);
document.querySelector('#mediana').textContent = `La mediana es: ${resultado}`;

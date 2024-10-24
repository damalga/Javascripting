const datos = [10,12,23,23,16,23,21,16,25,19,31,28];

// La desviación estándar es una medida de cuánto se dispersan los valores de un conjunto de datos respecto a la media.
function calcularDesviacionEstandar(arr) {
    // Calcula la media
    const sumaNums = arr.reduce((acu, num) => acu + num, 0);
    const media = sumaNums / arr.length;
    // Calcula las diferencias al cuadrado y lo metes en un nuevo array con map()
    const cuadradoDiff = arr.map(num => {
        const diff = num - media;
        // Eleva la diferencia al cuadrado
        return Math.pow(diff, 2);
    });
    // Sumamos las diferencias al cuadrado y dividimos entre el número de elementos
    const sumaDiferencias = cuadradoDiff.reduce((acu, num) => acu + num, 0);
    const varianza = sumaDiferencias / arr.length;
    // Raíz cuadrada a la varianza para obtener la desviación estándar
    const desviacionEstandar = Math.sqrt(varianza);
    return desviacionEstandar;
}

const desviacion = calcularDesviacionEstandar(datos);
document.querySelector('#desviacion-estandar').textContent = `La desviación estándar es: ${desviacion.toFixed(4)}`;

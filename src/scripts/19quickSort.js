const numerosDesordenados = [23,45,16,37,3,99,22,75,61,92];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Seleccionar un índice aleatorio como pivote
    const pivoteIndex = Math.floor(Math.random() * arr.length);
    const pivote = arr[pivoteIndex];

    // Arrays para numeros menores, iguales y mayores que el pivote
    const menores = [];
    const iguales = [];
    const mayores = [];
    
    // Bucle para meter los numeros en su respectivo array ordenados
    for (let el of arr) {
        if (el < pivote) {
            menores.push(el);
        } else if (el > pivote) {
            mayores.push(el);
        } else {
            iguales.push(el);
        }
    }

    // Recursión y concatenación de resultados
    return [...quickSort(menores), ...iguales, ...quickSort(mayores)];
}

const numerosOrdenados = quickSort(numerosDesordenados);
document.querySelector('#quicksort').textContent = `Array ordenado: ${numerosOrdenados.join(', ')}`;

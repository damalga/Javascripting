const numeros = [1,2,3,4,1,2,1,3,5,1,3,5,1,2,3,4,1,4,3,2];

function contarRepetidos(arr) {
    let objNum = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]; // Número actual
        if (objNum[num]) {
            objNum[num] += 1; // Si el número ya está en el objeto, sumamos 1
        } else {
            objNum[num] = 1; // Si no está, lo inicializamos a 1
        }
    }
    return objNum;
}

// Primera opción pintando directamente un objeto en el DOM con JSON.stringify,
// pues los objetos no se imprimen directamente en el DOM como strings
const conteo1 = contarRepetidos(numeros);
document.querySelector('#conteo1').textContent = JSON.stringify(conteo1);

// ALTERNATIVA para mostrar por pantalla sin formato de objeto
const conteo2 = contarRepetidos(numeros);
let resultado = '';
for (const num in conteo2) {
  resultado += `El número ${num} se repite ${conteo2[num]} veces<br>`;
}
document.querySelector('#conteo2').innerHTML = resultado;

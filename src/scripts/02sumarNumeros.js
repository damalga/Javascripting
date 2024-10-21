const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const numeros2 = [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];

// VERSION CLASICA PARA SUMAR NUMEROS DE UN ARRAY
function sumarNumeros(arr) {
    let sumarNumeros = 0;
    for (let i = 0; i < arr.length; i++) {
        sumarNumeros += arr[i];
    }
    return sumarNumeros;
}
const suma = sumarNumeros(numeros);
document.querySelector('#suma').textContent = suma;

// VERSION MODERNA (reduce) PARA SUMAR NUMEROS DE UN ARRAY
function sumarNumeros2(arr) {
    // reduce() recorre el array, acumulando un valor a medida que avanza.
    return arr.reduce((acumulador, numero) => acumulador + numero, 0);
}
const suma2 = sumarNumeros2(numeros2);
document.querySelector('#suma2').textContent = suma2;
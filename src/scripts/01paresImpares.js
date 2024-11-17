const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// VERSION CLASICA PARA OBTENER PARES DE UN ARRAY
function filtrarPares(arr) {
  const pares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares.push(arr[i]);
    }
  }
  return pares;
}
const pares = filtrarPares(numeros);
document.querySelector('#pares').textContent = pares;

// VERSION MODERNA (filter) PARA OBTENER IMPARES DE UN ARRAY
function filtrarImpares(arr) {
  return arr.filter(numero => numero % 2 !== 0);
}
const impares = filtrarImpares(numeros);
document.querySelector('#impares').textContent = impares;

const nums1 = [3, 4, 5, 6, 1, 2];
const nums2 = [3, 5, 1, 2, 4, 6];

function ordenadoRotado(arr) {
  let cortes = 0;

  for (let i = 0; i < arr.length; i++) {
    // Compara el número actual con el siguiente (usando el módulo para "cerrar" el array)
    if (arr[i] > arr[(i + 1) % arr.length]) {
      cortes++;
    }
  }

  // Si hay 0 o 1 cortes, está ordenado y rotado
  return cortes <= 1;
}

const result1 = ordenadoRotado(nums1); // Debería ser true
document.querySelector("#ordenado-rotado-1").innerHTML =
  `El array: ${nums1} es: ${result1}`;
const result2 = ordenadoRotado(nums2); // Debería ser false
document.querySelector("#ordenado-rotado-2").innerHTML =
  `El array: ${nums2} es: ${result2}`;

const arrayOrdenado1 = [1,3,5,7,9,15,21,27,33];
const arrayOrdenado2 = [2,4,6,8,10,12,16,20,24,28,32];

function fusionarArraysOrdenados(arr1, arr2) {
  let i = 0;
  let j = 0;
  const arraysOrdenados = [];
  while (i < arr1.length && j < arr2.length){
  // Comparar los elementos actuales de arr1 y arr2
    if(arr1[i] < arr2[j]){
      // Agregar el menor al array fusionado
      arraysOrdenados.push(arr1[i]);
      // Avanzar el índice i
      i++;
    }else{
      arraysOrdenados.push(arr2[j]);
      // Avanzar el índice j
      j++;
    }
  }
  // Uno de los arrays puede haber terminado,
  // pero el otro puede tener elementos que aún no se han agregado.
  while (i < arr1.length){
    arraysOrdenados.push(arr1[i]);
    i++;
  }
  while (j < arr2.length){
    arraysOrdenados.push(arr2[j]);
    j++;
  }
  return arraysOrdenados;
}

const arrayFusion = fusionarArraysOrdenados(arrayOrdenado1, arrayOrdenado2);
document.querySelector('#fusion').textContent = `Array fusionado: ${arrayFusion}`;

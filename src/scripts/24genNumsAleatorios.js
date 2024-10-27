function generarNumerosAleatorios(nums, min, max) {
  // Validación: Si el rango no tiene suficientes números únicos
  if (nums > max - min + 1) {
    return "No se pueden generar suficientes números únicos en el rango dado.";
  }
  // Métodos útiles para set.
  // - add(valor): Agrega un valor.
  // - delete(valor): Elimina un valor.
  // - has(valor): Verifica si un valor existe.
  // - clear(): Elimina todos los valores.
  // - size: Propiedad que devuelve el número de elementos.
  const numsUnicos = new Set();

  while (numsUnicos.size <= nums){
    const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numsUnicos.add(numAleatorio);
  }

   // Convertir Set a Array
  return Array.from(numsUnicos);
}

// 1er param: Cantidad de números, 2do param: Num minimo, 3er param: Num máximo
const numsAleatorios = generarNumerosAleatorios(15, 1, 50);
document.getElementById('nums-aleatorios').innerHTML = numsAleatorios;

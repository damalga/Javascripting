const matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

function procesarMatriz(mat) {
  // Aplanamos la matriz y le hacemos un reduce para recorrer y acumular todos los elementos
  const sumaTotal = mat.flat().reduce((acu, num) => acu + num, 0);

  // Hacemos un map para hacer un nuevo array
  const sumaFilas = matriz.map(fila => {
    return fila.reduce((acu, num) => acu + num, 0);
  });

  // Creamos un array que tendrá un slot para cada columna
  const sumaColumnas = Array(mat[0].length).fill(0);
  for (let fila of mat) {
    // Recorremos cada fila en la matriz
    fila.forEach((num, idx) => {
      // Sumamos cada número a su columna correspondiente
      sumaColumnas[idx] += num;
    });
  }

  return {
    sumaTotal,
    sumaFilas,
    sumaColumnas
  };
}

const resultado = procesarMatriz(matriz);
document.querySelector('#suma-total-matriz').innerHTML = `Suma Total: ${resultado.sumaTotal}`;
document.querySelector('#suma-filas-matriz').innerHTML = `Suma por Filas: ${resultado.sumaFilas.join(', ')}`;
document.querySelector('#suma-columnas-matriz').innerHTML = `Suma por Columnas: ${resultado.sumaColumnas.join(', ')}`;

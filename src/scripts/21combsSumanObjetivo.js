const numeros = [2,3,6,7,9,13];
const objetivo = 13;

function encontrarCombs(numeros, objetivo) {
  const resultado = []

  function backTrack(combActual, sumaActual, indice){
    // Si la suma actual es igual al objetivo lo metemos en el array combActual
    if (sumaActual === objetivo) {
      resultado.push([...combActual]);
      return;
    }
    // Si no es una combinación válida, retrocedemos y seguiremos explorando otros números
    if(sumaActual > objetivo){
      return;
    }
    for (let j = indice; j < numeros.length; j++){
      // Agregar números
      combActual.push(numeros[j]);
      // Llamada recursiva
      // Podemos reutilizar el mismo número, ya que i no aumenta.
      // Si quisiéramos evitar reutilizar números, pasaríamos i + 1 en lugar de i.
      backTrack(combActual, sumaActual + numeros[j], j)
      // Retroceso
      combActual.pop();
    }
  }

  //combActual = []: No hay números en la combinación actual.
  //sumaActual = 0: La suma es 0.
  //indice = 0: Comenzamos a explorar desde el primer número en numeros.
  backTrack([], 0, 0);

  return resultado;
}

const combinaciones = encontrarCombs(numeros, objetivo);
document.querySelector('#combinaciones').textContent = JSON.stringify(combinaciones);

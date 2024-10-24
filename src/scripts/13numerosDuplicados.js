const numeros = [1,2,3,4,5,2,6,7,3,8,1,2,3,4,5];

function encontrarDuplicados(arr) {
    let contador = {}
    let resultado = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (contador[num]) {
            contador[num] += 1;
        } else {
            contador[num] = 1;
        }
    }
    for (let numero in contador) {
        if (contador[numero] > 1) {
            resultado.push(`El número ${numero} se ha duplicado ${contador[numero]} veces`);
        }
    }
    return resultado;
}

const duplicados = encontrarDuplicados(numeros);
document.querySelector('#duplicados').innerHTML = duplicados.join('<br>');

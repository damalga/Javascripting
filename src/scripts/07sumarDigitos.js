// Variable que almacena un num aleatorio de 5 digitos
const numeroAleatorio = Math.floor(10000 + Math.random() * 90000);

function sumarDigitos(num){
    // Convertimos el num a string para poder separarlo en dígitos
    const digitos = num.toString().split('');

    // Sumamos los dígitos, primero convirtiéndolos a número
    const suma = digitos.reduce((acumulador, digito) => acumulador + Number(digito), 0);

    return suma;
}

const resultado = sumarDigitos(numeroAleatorio);
document.querySelector('#sumar-digitos').innerHTML = resultado;
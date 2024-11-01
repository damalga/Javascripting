const verduras = [
    { nombre: "Lechuga", precio: 2 },
    { nombre: "Tomate", precio: 1 },
    { nombre: "Cebolla", precio: 2 },
    { nombre: "Berenjena", precio: 4 },
    { nombre: "Calabacin", precio: 3 },
    { nombre: "Zanahoria", precio: 3 }
];

function agruparPorPropiedad(arr, prop) {
    // Recorre el array, acumulando un valor a medida que avanza.
    return arr.reduce((acu, verdura) => {
        const clave = verdura[prop];
        // Si no existe verdura de este precio, la iniciamos en un array.
        if (!acu[clave]) {
            acu[clave] = [];
        }
        acu[clave].push(verdura);
        return acu;
    }, {});
}

const resultado = agruparPorPropiedad(verduras, "precio");
document.querySelector('#array-objeto').innerHTML = JSON.stringify(resultado,null,2);
const frutas = [
  { nombre: "Platano", precio: 2 },
  { nombre: "Manzana", precio: 1 },
  { nombre: "Naranja", precio: 3 },
  { nombre: "Aguacate", precio: 6 },
  { nombre: "Piña", precio: 5 },
  { nombre: "Mango", precio: 4 }
];

function ordenarPorPrecio(array, propiedad) {
  return array.sort((a, b) => a[propiedad] - b[propiedad]);
}

function ordenarPorPropiedad(array, propiedad) {
  return array.sort((a, b) => {
    // -1 si a[propiedad] debe ir antes que b[propiedad]
    if (a[propiedad] < b[propiedad]) return -1;
    // 1 si b[propiedad] debe ir antes que a[propiedad],
    if (a[propiedad] > b[propiedad]) return 1;
    return 0;
  });
}

const ordenPorPrecio = ordenarPorPrecio([...frutas], "precio");
document.querySelector('#orden-por-precio').innerHTML = ordenPorPrecio.map(fruta => `${fruta.nombre}: ${fruta.precio}€`).join('<br>');

const ordenPorNombre = ordenarPorPropiedad([...frutas], "nombre");
document.querySelector('#orden-por-propiedad').innerHTML = ordenPorNombre.map(fruta => `${fruta.nombre}: ${fruta.precio}€`).join('<br>');

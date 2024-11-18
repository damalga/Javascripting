const personajes = ["un mago", "un guerrero", "una princesa", "un dragón", "un ladrón"];
const lugares = ["en un castillo", "en un bosque oscuro", "en la cima de una montaña", "en una cueva secreta", "en un pueblo lejano"];
const objetos = ["una espada mágica", "un mapa antiguo", "una poción secreta", "un anillo encantado", "un libro de hechizos"];
const acciones = ["enfrentó a un monstruo", "descubrió un terrible secreto", "se alió con un enemigo", "rescató a una princesa", "buscó un tesoro perdido"];

function generarHistoria(){
  function palabraAleatoria(arr) {
    // Aquí seleccionarás y devolverás un elemento del array
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let personaje = palabraAleatoria(personajes);
  let lugar = palabraAleatoria(lugares);
  let objeto = palabraAleatoria(objetos);
  let accion = palabraAleatoria(acciones);

  let historia = `${personaje} ${lugar} con ${objeto} ${accion}.`;

  return historia;
}

const resultado = generarHistoria();
document.querySelector('#historia-aleatoria').textContent = generarHistoria();

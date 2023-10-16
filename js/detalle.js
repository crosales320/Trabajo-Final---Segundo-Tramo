let codigo = location.search;
console.log(codigo);

let codigoPersonaje = new URLSearchParams(codigo);
console.log(codigoPersonaje);

let codigoSeleccionado = codigoPersonaje.get('codigo');
console.log(codigoSeleccionado);


let codigoFinal = document.getElementById('codigo');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');
let casa = document.getElementById('casa');
let descripcion = document.getElementById('descripcion');


let detallePersonaje = JSON.parse(localStorage.getItem('detallesPersonaje'))

let arrayDetalle = JSON.parse(detallePersonaje[0]);
console.log(arrayDetalle);



imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>`
nombre.innerHTML = `Nombre: ${arrayDetalle.nombre}`;
casa.innerHTML = `Casa: ${arrayDetalle.casa}`;
descripcion.innerHTML = `${arrayDetalle.descripcion}`;



let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    localStorage.clear()
    location.href = 'index.html'
})
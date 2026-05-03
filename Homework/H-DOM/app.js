// Selección de los elementos con getElementById
const boton = document.getElementById('CambiarContenido');
const botonAgregar = document.getElementById('AgregarElemento');
const botonEliminar = document.getElementById('EliminarElemento');
const parrafo = document.getElementById('parrafo');

// Función para generar un color RGB aleatorio
function generarColorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
// Listener para el clic del botón
boton.addEventListener('click', () => {
    console.log('Botón "Cambiar Contenido" clickeado');
    parrafo.textContent = ' ¡Nuevo contenido agregado!';
    parrafo.style.backgroundColor = generarColorAleatorio();
});
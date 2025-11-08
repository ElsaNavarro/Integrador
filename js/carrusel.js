document.addEventListener('DOMContentLoaded', () => {
  const imagenes = [
    "img/imagen2.jpg",
    "img/amigos3.jpeg",
    "img/imagen4.jpg",
    "img/imagen5.jpg",
    "img/imagen6.jpg",
    "img/imagen7.jpg",
  ];

  let indice = 0;
  const imagenCarrusel = document.getElementById("imagenCarrusel");
  const btnAnterior = document.getElementById("btnAnterior");
  const btnSiguiente = document.getElementById("btnSiguiente");

  function mostrarImagen() {
    if (!imagenCarrusel) return;
    imagenCarrusel.src = imagenes[indice];
  }

  function siguiente() {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
  }

  function anterior() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
  }

  if (btnSiguiente && btnAnterior) {
    btnSiguiente.addEventListener('click', siguiente);
    btnAnterior.addEventListener('click', anterior);
  } 
  mostrarImagen();
});

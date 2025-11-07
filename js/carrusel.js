<script>
    // Array ,ruta de imágenes
    const imagenes = [
    
      "imagen2.jpg",
      "amigos3.jpeg",
      "imagen4.jpg",
      "imagen5.jpg",
      "imagen6.jpg",
      "imagen7.jpg",
    ];

       // Índice actual
    let indice = 0;

    // Elemento <img> del HTML
    const imagenCarrusel = document.getElementById("imagenCarrusel");

    // Función que muestra la imagen según el índice
    function mostrarImagen() {
      imagenCarrusel.src = imagenes[indice];
    }

    // Función para avanzar
    function siguiente() {
      indice++;
      if (indice >= imagenes.length) {
        indice = 0; // vuelve al inicio
      }
      mostrarImagen();
    }

    // Función para retroceder
    function anterior() {
      indice--;
      if (indice < 0) {
        indice = imagenes.length - 1; // vuelve al final
      }
      mostrarImagen();
    }

    // Mostrar la primera imagen al cargar
    mostrarImagen();
  </script>
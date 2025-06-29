fetch("menu-inicio.html")
  .then(respuesta => respuesta.text())
  .then(archivoHTML => {
    document.getElementById("contenedor-principal").innerHTML = archivoHTML;
  });
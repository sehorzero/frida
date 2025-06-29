let contenedorPrincipal = document.getElementById("contenedor-principal");
let contenedorMV = document.getElementById("contenedor-mv");
let contenedorVD = document.getElementById("contenedor-vd");

document.getElementById("btn-inicio").addEventListener("click", () => {
    let numeroSucursal = document.getElementById("numero-sucursal").value;
    let selReporte = document.getElementById("sel-reporte").value;
    if (numeroSucursal > 0 && numeroSucursal < 200) {
        if (selReporte === "1") {
            contenedorPrincipal.hidden = true;
            contenedorMV.hidden = false;
        } else {
            contenedorPrincipal.hidden = true;
            contenedorVD.hidden = false;
        }
    }
});
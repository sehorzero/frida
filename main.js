let contenedorIndice = document.getElementById("contenedor-indice")
let contenedorMvEntrada = document.getElementById("contenedor-mv-entrada")
let contenedorMvSalida = document.getElementById("contenedor-mv-salida")

let mvIndice = document.getElementById("mv-indice")
mvIndice.addEventListener("click", () => {
    contenedorIndice.hidden = true
    contenedorMvEntrada.hidden = false

    mvBtnContinuar = document.getElementById("mv-btn-continuar")
    mvBtnContinuar.addEventListener("click", () => {
        let mvNumSucursal = document.getElementById("mv-num-sucursal").value
        let mvPresupuestoVenta = document.getElementById("mv-presupuesto-venta").value
        let mvAcumuladoMensual = document.getElementById("mv-acumulado-mensual").value
        let mvTextoAdvertencia = document.getElementById("mv-texto-advertencia")

        if (mvNumSucursal > 0 && mvPresupuestoVenta > 0 && mvAcumuladoMensual > 0) {
            contenedorMvEntrada.hidden = true
            contenedorMvSalida.hidden = false
        }
        else {
            setTimeout(() => {mvTextoAdvertencia.style.color = "red"}, 200)
            setTimeout(() => {mvTextoAdvertencia.style.color = "black"}, 400)
            setTimeout(() => {mvTextoAdvertencia.style.color = "red"}, 600)
            setTimeout(() => {mvTextoAdvertencia.style.color = "black"}, 800)
        }
    })
})
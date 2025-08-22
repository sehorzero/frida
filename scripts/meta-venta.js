function animacionAdvertencia(objeto) {
    setTimeout(() => {objeto.style.color = "red"}, 200)
    setTimeout(() => {objeto.style.color = "black"}, 400)
    setTimeout(() => {objeto.style.color = "red"}, 600)
    setTimeout(() => {objeto.style.color = "black"}, 800)
}

let contenedorEntrada = document.getElementById("contenedor-entrada")
let contenedorSalida = document.getElementById("contenedor-salida")
let btnContinuar = document.getElementById("btn-continuar")
let textoAdvertencia = document.getElementById("texto-advertencia") 

btnContinuar.addEventListener("click", () => {
    let numSucursal = document.getElementById("num-sucursal").value
    let presupuestoVenta = document.getElementById("presupuesto-venta").value
    let acumuladoMensual = document.getElementById("acumulado-mensual").value
    
    if (numSucursal > 0 && presupuestoVenta > 0 && acumuladoMensual > 0) {
        contenedorEntrada.hidden = true
        contenedorSalida.hidden = false
    }
    else {
        animacionAdvertencia(textoAdvertencia)
    }
})
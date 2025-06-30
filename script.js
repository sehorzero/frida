let contenedorPrincipal = document.getElementById("contenedor-principal");
let contenedorMV = document.getElementById("contenedor-mv");
let contenedorVD = document.getElementById("contenedor-vd");
let contenedorOPMV = document.getElementById("contenedor-opmv");

let btnInicio = document.getElementById("btn-inicio");
let btnMV = document.getElementById("btn-mv");

btnInicio.addEventListener("click", () => {
    let numeroSucursal = document.getElementById("numero-sucursal").value;
    let selReporte = document.getElementById("sel-reporte").value;
    let mvNumSucursal = document.getElementById("mv-num-sucursal");
    if (numeroSucursal > 0 && numeroSucursal < 200) {
        if (selReporte === "1") {
            contenedorPrincipal.hidden = true;
            contenedorMV.hidden = false;
            mvNumSucursal.textContent = `SF-${numeroSucursal}`;
            btnMV.addEventListener("click", () => {
                let mvMetaVenta = parseFloat(document.getElementById("mv-meta-venta").value);
                let mvP1C1 = parseFloat(document.getElementById("mv-p1c1").value);
                let mvP1C2 = parseFloat(document.getElementById("mv-p1c2").value);
                let mvMetaMat = parseFloat((mvMetaVenta * .4).toFixed(2));
                let mvVentaMat = parseFloat((mvP1C1 + mvP1C2).toFixed(2));
                let mvLogroMat = parseFloat((mvMetaMat / mvVentaMat * 100).toFixed(2));
                let mvMetaVesp = parseFloat((mvMetaVenta * .6).toFixed(2));
                let mvCargaMat = parseFloat((mvMetaMat - mvVentaMat).toFixed(2));
                let mvMetaReal = parseFloat((mvMetaVesp + mvCargaMat).toFixed(2));
                if (mvMetaVenta > 0 && mvP1C1 > 0 && mvP1C2 > 0) {
                    contenedorMV.hidden = true;
                    contenedorOPMV.hidden = false;
                    contenedorOPMV.innerHTML =
                        `<p>Meta de Venta Vespertina, SF${numeroSucursal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>` +
                        `<br>` +
                        `<p>Meta del Día: ${mvMetaVenta.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>` +
                        `<br>` +
                        `<p>MATUTINO</p>` +
                        `<p>Meta: ${mvMetaMat.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>` +
                        `<p>Venta: ${mvVentaMat.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>` +
                        `<p>Logro: ${mvLogroMat}%</p>` +
                        `<br>` +
                        `<p>VESPERTINO</p>` +
                        `<p>Meta: ${mvMetaVesp.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>` +
                        `<p>Carga Matutina: ${mvCargaMat.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>` +
                        `<p>Meta Real: ${mvMetaReal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>`
                }
            });
        } else {
            contenedorPrincipal.hidden = true;
            contenedorVD.hidden = false;
        }
    }
});
let contenedorPrincipal = document.getElementById("contenedor-principal");
let contenedorMV = document.getElementById("contenedor-mv");
let contenedorVD = document.getElementById("contenedor-vd");
let contenedorOPMV = document.getElementById("contenedor-opmv");
let contenedorOPVD = document.getElementById("contenedor-opvd");

let textoOPMV = document.getElementById("texto-opmv");
let textoOPVD = document.getElementById("texto-opvd");

let btnInicio = document.getElementById("btn-inicio");
let btnMV = document.getElementById("btn-mv");
let btnVD = document.getElementById("btn-vd");

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
                let mvMetaVesp = parseFloat((mvMetaVenta * .6).toFixed(2));
                let mvCargaMat = parseFloat((mvMetaMat - mvVentaMat).toFixed(2));
                let mvMetaReal = parseFloat((mvMetaVesp + mvCargaMat).toFixed(2));
                if (mvMetaVenta > 0 && mvP1C1 > 0 && mvP1C2 > 0) {
                    contenedorMV.hidden = true;
                    contenedorOPMV.hidden = false;
                    textoOPMV.innerHTML =
                        `Meta de Venta Vespertina, SF${numeroSucursal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br><br>Meta del Día: ${mvMetaVenta.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br><br>MATUTINO` +
                        `<br>- Meta: ${mvMetaMat.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br>- Venta: ${mvVentaMat.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br><br>VESPERTINO` +
                        `<br>- Meta: ${mvMetaVesp.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br>- Carga Matutina: ${mvCargaMat.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br>- Meta Real: ${mvMetaReal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}`
                    document.getElementById("link-wa-mv").addEventListener("click", function(e) {
                        e.preventDefault();
                        let textoConvertidoOPMV = textoOPMV.innerHTML.replace(/<br\s*\/?>/gi, "\n");
                        let textoCodificadoOPMV = encodeURIComponent(textoConvertidoOPMV);
                        window.location.href = "whatsapp://send?text=" + textoCodificadoOPMV;
                    });
                }
            });
        } else {
            contenedorPrincipal.hidden = true;
            contenedorVD.hidden = false;
            mvNumSucursal.textContent = `SF-${numeroSucursal}`;
            btnVD.addEventListener("click", () => {
                let vdMetaVenta = parseFloat(document.getElementById("vd-meta-venta").value);
                let vdP1C1 = parseFloat(document.getElementById("vd-p1c1").value);
                let vdP1C2 = parseFloat(document.getElementById("vd-p1c2").value);
                let vdP2C1 = parseFloat(document.getElementById("vd-p2c1").value);
                let vdP2C2 = parseFloat(document.getElementById("vd-p2c2").value);
                let vdMetaMat = parseFloat((vdMetaVenta * .4).toFixed(2));
                let vdVentaMat = parseFloat((vdP1C1 + vdP1C2).toFixed(2));
                let vdMetaVesp = parseFloat((vdMetaVenta * .6).toFixed(2));
                let vdVentaVesp = parseFloat((vdP2C1 + vdP2C2).toFixed(2));
                let vdVentaTotal = parseFloat((vdVentaMat + vdVentaVesp).toFixed(2));
                if (vdMetaVenta > 0 && vdP1C1 > 0 && vdP1C2 > 0 && vdP2C1 > 0 && vdP2C2 > 0) {
                    contenedorVD.hidden = true;
                    contenedorOPVD.hidden = false;
                    textoOPVD.innerHTML =
                        `Venta del Día, SF${numeroSucursal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br><br>MATUTINO` +
                        `<br>- Meta: ${vdMetaMat.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br>- Venta: ${vdVentaMat.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br><br>VESPERTINO` +
                        `<br>- Meta: ${vdMetaVesp.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br>- Venta: ${vdVentaVesp.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br><br>TOTAL DEL DÍA` +
                        `<br>- Meta: ${vdMetaVenta.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}` +
                        `<br>- Venta: ${vdVentaTotal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}`
                    document.getElementById("link-wa-vd").addEventListener("click", function(e) {
                        e.preventDefault();
                        let textoConvertidoOPVD = textoOPVD.innerHTML.replace(/<br\s*\/?>/gi, "\n");
                        let textoCodificadoOPVD = encodeURIComponent(textoConvertidoOPVD);
                        window.location.href = "whatsapp://send?text=" + textoCodificadoOPVD;
                    });
                }
            });
        }
    }
});
# ---------
# ACERCA DE
# ---------
# Frida
# Version 0.1

# ------------
# INTRODUCCIÓN
# ------------
# Frida se creó para calcular los objetivos de venta y ventas totales del día
# de alguna sucursal de "ABARROTES FASTI". La finalidad es agilizar este
# proceso, con ello se espera tener en tiempo y forma el reporte de ventas.
#
# La información ingresada y calculada, es y será tratada con responsabilidad
# por quién ejecute este script.
#
# Hecho por "Volovan De Jamon" (https://github.com/sehorzero).

# ---------
# EJECUCIÓN
# ---------

Write-Host "Frida (Version 0.1)"
Write-Host ""

Write-Host "RESULTADO DE VENTAS DEL DIA"
Write-Host ""

Write-Host "Ingreso de datos"
Write-Host "----------------"
$MetaVenta = Read-Host "Meta de Venta"
# El script no continuará hasta que el usuario agregue un número entero o con decimal
while (-not ([double]::TryParse($MetaVenta, [ref]$null))) {
    Write-Host "!" -ForegroundColor Red -NoNewLine
    $MetaVenta = Read-Host " Ingresa un numero valido"
}
$P1C1 = Read-Host "Venta del Parcial 1, Caja 1"
# El script no continuará hasta que el usuario agregue un número entero o con decimal
while (-not ([double]::TryParse($P1C1, [ref]$null))) {
    Write-Host "!" -ForegroundColor Red -NoNewLine
    $P1C1 = Read-Host " Ingresa un numero valido"
}
$P1C2 = Read-Host "Venta del Parcial 1, Caja 2"
# El script no continuará hasta que el usuario agregue un número entero o con decimal
while (-not ([double]::TryParse($P1C2, [ref]$null))) {
    Write-Host "!" -ForegroundColor Red -NoNewLine
    $P1C2 = Read-Host " Ingresa un numero valido"
}
$P2C1 = Read-Host "Venta del Parcial 2, Caja 1"
# El script no continuará hasta que el usuario agregue un número entero o con decimal
while (-not ([double]::TryParse($P2C1, [ref]$null))) {
    Write-Host "!" -ForegroundColor Red -NoNewLine
    $P2C1 = Read-Host " Ingresa un numero valido"
}
$P2C2 = Read-Host "Venta del Parcial 2, Caja 2"
# El script no continuará hasta que el usuario agregue un número entero o con decimal
while (-not ([double]::TryParse($P2C2, [ref]$null))) {
    Write-Host "!" -ForegroundColor Red -NoNewLine
    $P2C2 = Read-Host " Ingresa un numero valido"
}

[double]$MetaVentaMat = [Math]::Round(([double]$MetaVenta * .4), 2)
[double]$VentaMat = [Math]::Round(([double]$P1C1 + [double]$P1C2), 2)

[double]$MetaVentaVesp = [Math]::Round(([double]$MetaVenta * .6), 2)
[double]$VentaVesp = [Math]::Round(([double]$P2C1 + [double]$P2C2), 2)

[double]$MetaVentaDouble = [Math]::Round(($MetaVenta), 2)
[double]$VentaDia = [Math]::Round(($VentaMat + $VentaVesp), 2)

$MetaVentaMatFormat = $MetaVentaMat.ToString("C")
$VentaMatFormat = $VentaMat.ToString("C")

$MetaVentaVespFormat = $MetaVentaVesp.ToString("C")
$VentaVespFormat = $VentaVesp.ToString("C")

$MetaVentaFormat = $MetaVentaDouble.ToString("C")
$VentaDiaFormat = $VentaDia.ToString("C")

$ResultadoMat = [Math]::Round(($VentaMat / $MetaVentaMat * 100), 2)
$ResultadoVesp = [Math]::Round(($VentaVesp / $MetaVentaVesp * 100), 2)
$ResultadoDia = [Math]::Round(($VentaDia / $MetaVentaDouble * 100), 2)

Write-Host "`n`n`n"

Write-Host " --------------------------"
Write-Host "| Reporte de Ventas del Dia"
Write-Host "| $(Get-Date -Uformat '%D %R')"
Write-Host "|"; Write-Host "|"
Write-Host "| MATUTINO"
Write-Host "| Meta: $MetaVentaMatFormat"
Write-Host "| Venta: $VentaMatFormat | " -NoNewLine
if ($VentaMat -ge $MetaVentaMat) {
	Write-Host "$ResultadoMat%" -ForegroundColor Green
} else {
	Write-Host "$ResultadoMat%" -ForegroundColor Red
}
Write-Host "|"; Write-Host "|"
Write-Host "| VESPERTINO"
Write-Host "| Meta: $MetaVentaVespFormat"
Write-Host "| Venta: $VentaVespFormat | " -NoNewLine
if ($VentaVesp -ge $MetaVentaVesp) {
	Write-Host "$ResultadoVesp%" -ForegroundColor Green
} else {
	Write-Host "$ResultadoVesp%" -ForegroundColor Red
}
Write-Host "|"; Write-Host "|"
Write-Host "| TOTAL DEL DIA"
Write-Host "| Meta: $MetaVentaFormat"
Write-Host "| Venta: $VentaDiaFormat | " -NoNewLine
if ($VentaDia -ge $MetaVentaDouble) {
	Write-Host "$ResultadoDia%" -ForegroundColor Green
} else {
	Write-Host "$ResultadoDia%" -ForegroundColor Red
}
Write-Host " --------------------------"

Write-Host "`n`n`n"

Write-Host "Presiona Enter para salir..."
Read-Host
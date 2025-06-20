# Acerca De

En mi trabajo, al hacer el corte de caja, me piden que reporte las ventas del día, se me oucrrió que podría hacer menos tedioso el tema de andar contando e incluso agregar más detalles.

Creé un script para calcular los objetivos de venta y las ventas totales del día. La finalidad es agilizar este proceso. Con ello, se espera tener en tiempo y forma el reporte de ventas.

Usé PowerShell porque Windows ya lo trae instalado, por obvias razones, no me permiten instalar otros programas.

# Instalación

Comando para descargar el script:

```powershell
iwr -Uri https://raw.githubusercontent.com/sehorzero/frida/refs/heads/main/Frida.ps1 -OutFile .\
```

Quizá sea más cómodo modificar el parámetro `-OutFile .\` a una ruta específica, por ejemplo `-OutFile C:\Users\$env:UserName\Desktop`.

# Ejecución

Antes de iniciar el script, seguramente se tenga que cambiar la directiva de ejecución.

Comando para saber cuál es la directiva de ejecución actual:

```powershell
Get-ExecutionPolicy
```

Si comando anterior retorna `RemoteSigned` o `Unrectricted`, quizá no sea necesario hacer más, si no, se tendrá que cambiar a alguno de estos dos valores:

```powershell
Get-ExecutionPolicy -ExectuionPolicy Unrestricted -Scope CurrentUser
```

Finalmente, se ejecuta el script llamándolo desde la ruta donde se descargó, por ejemplo:

```powershell
C:\Users\$env:UserName\Desktop\Frida.ps1
```

También se puede ejecutar haciendo clic derecho sobre el archivo y seleccionar *Ejecutar con PowerShell*.

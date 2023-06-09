# Prueba Técnica Frontend Inditex

Esta prueba se ha entregado con [este enunciado](/Prueba-tecnica-frontend-2023.pdf). Para ello he preparado la siguiente documentación:

1. [Inicialización](#Inicialización)
2. [Configuración](#Configuración)
3. [Futuro](#Futuro)

# Inicialización

1. [Con Docker](#Con%20Docker)
2. [Sin Docker](#Sin%20Docker)

## Con Docker

  Si tienes Docker instalado en tu equipo, inicia una ventana de Visual Studio Code. En este editor, instala la extensión [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). Aquí hay otra variación, y es que si tienes instalado Ubuntu, no tienes que hacer nada más, pero si tienes Windows, es mejor que instales WSL2 en tu equipo. Una vez abierto VSC, tan solo tienes que hacer Windows+Shift+P y seleccionar Dev Container: Reopen in Containers

## Sin Docker

  Necesitas instalar los paquetes necesarios:
  1. Node: 20.1.0

# Configuración
Este proyecto lo he generado con Vite con las opciones de React, Typescript y SWC. Para ello he usado el comando:
```console
npm create vite@latest
```
Una vez que te descargues el proyecto, tienes que ejecutar los siguientes comandos para poder ejecutarlo:

```console
npm install
npm start
```

Si lo que quieres es construír la aplicación en modo producción, después de instalar las dependencias debes ejecutar:

```console
npm build
```

Esto generará una carpeta dist con los ficheros estáticos necesarios para ejecutarlos en un servidor. Se recomienda copiar estos ficheros en la raíz del servidor web para servirlo dónde necesites.

# Futuro
Hay 3 anys que se pueden ver al lanzar el linter pero por motivos de tiempo no lo he trabajado más.

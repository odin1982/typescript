# TYPESCRIPT
## What is Typescript
    - a Javascript superset
    - a languague building up on Javacript
    - Adds new features + advantages to javascript
    - Browser cant execute it
    - Tu archivo TS(.ts) lo debes compilar para convertirlo en un archivo Javascript(.js)

## Why Typescript
    - avoid unwanted behavior at runtime
    - helps developer to write a better code
    - The key difference is: Javascript uses "dynamic types" (resolved at runtime), Typescript uses "static types" (set during development).

## Typescript adds
    - Types
    - Non Javascript features like interfaces or Generics
    - Next-ge Javascript features(compiled down for older Browsers)
    - Rich Configuration Options
    - Meta-Programing Features like Decorators
    - Modern Tooling that helps even in non typescript projects

## Installig typescript
    - Ir a la pagina de typescript
    - Ir a download
    - Te indica que lo puedes bajar con NPM:
        npm install typescript --save-dev
    - Para esto debes tener instalado NodeJS bajar version LTS
    - Ir a la pagina oficial de NODE JS e instalarlo
        https://nodejs.org/es/
    - ya que lo tienes instalado ahora si instalar Typescript

## tsc command
    Se usa para convertir un archivo .tsc en .js
    $ tsc [nombre-archivo].ts

## Types Typescript
### Core types
* number        --> 1,5.3,-10   --> All numbers, no differentation between integers or floats
* string        --> 'Hi',"Hi",`Hi`  --> All text values
* boolean       --> true,false

## The course project setup
* create index.html
* create squeleton html5
* add <script src="app.js" defer></script> in the <head></head>
* create app.ts file
* compile it with $tsc app.ts
* in the folder project execute
            $ npm init
* install lite-server
            $ npm install --save-dev lite-server
* agregar en el archivo package.json
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "start": "lite-server"       -->Agregar esta linea
            },
* ejecutar
            $ npm start
* stop server
    control + C



## npm init
    Sirve para construir el proyecto.
## package.json
    Contiene todos los metadatos acerca del proyecto tal como descripción, licencia, dependencias y scripts.

## typeof (javascript command)
Comando para verificar el tipo de dato de una variable.
    

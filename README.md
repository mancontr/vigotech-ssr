Server-side rendering examples
==============================

![JavaScript Vigo](https://i.imgur.com/AQL0aDv.png)

En este repositorio hemos subido el código de cada ejemplo de la presentación,
para poder experimentar con ellos a vuestro gusto.

Cada ejemplo está en una rama.
Usa el selector de arriba para elegir el que quieras.

Gracias!

Ejemplo 1
---------

En este ejemplo hemos configurado por separado la versión cliente y servidor.

### Cliente
La versión cliente consiste en un `index.htm` que carga React, ReactDOM, y
la edición "standalone" de Babel, y la utiliza para ejecutar `client.js`, que
contiene el código para renderizar un componente de ejemplo.

Para arrancarla, tan solo sirve esta carpeta a través de un servidor http
(ya que en `file://` no funciona), y abre index.htm.

### Servidor
La versión servidor está en `server.js`, y utiliza babel-node para transpilar
en directo el código.

Para arrancarla, haz `npm install` y luego `npm start`.

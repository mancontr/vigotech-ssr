Server-side rendering examples
==============================

![JavaScript Vigo](https://i.imgur.com/AQL0aDv.png)

En este repositorio hemos subido el código de cada ejemplo de la presentación,
para poder experimentar con ellos a vuestro gusto.

Cada ejemplo está en una rama.
Usa el selector de arriba para elegir el que quieras.

Gracias!

Ejemplo 2
---------

En este ejemplo hemos añadido Webpack tanto en cliente como en servidor.

Ahora tenemos un paso previo de compilación con Webpack + Babel,
que se ejecuta para cada entorno, dándonos un fichero para node y
otro para navegador.

Para ejecutarlo, primero debemos hacer `npm run build`, y luego:

- Para el cliente, tan solo abrir el index.htm (ya no es necesario servidor http)
- Para el servidor, `npm start`

# Proyecto Node

## Proyecto calificable

- Proyecto REST API con Express + MongoDB.

### Autor

- **_Yeison Alejandro Mendez_**

### procedimiento

- Primero se crea un repositorio en GitHub y se ancla aun nuevo proyecto en el visual code.
- Segundo se edita el archivo README.md con los datos del proyecto como autor, titulo, descripcion etc.
- Usamos el comando "npm init" para crear un nuevo proyecto en node y se crea el archivo package.json y agregamos en el script de este archivo '"start": "node index.js"'.
- Creamos el archivo "index.js" escribimos algo en console log y usamos el comando "npm start" para asegurarnos que se muestre lo escrito en consola.
- Usamos el comando "npm install" para crear el archivo package-lock.json y "npm install express" para añadir express y crear la carpeta de modulos.
- Creamos una carpeta src para en ella guardar todo lo relacionado con el funcionamiento del nucleo de nuestro programa (rutas, modelos, controladores etc).
- Creamos un archivo "servidor.js" para escribir la conexion a postman y de paso hacer pruebas.
- En el archivo servidor importamos el express y se lo asignamos a una variable.
- En el archivo package.json asignamos el '"type": "module"', para usar los archivos .js importados.
- Luego usamos el metodo .use para usar el express.json en la variable que declaramos.
- Usando el metodo .get con la variable hacemos una funcion flecha para nos retorne un error 404 en caso de que postman no logre conectarse.
- Importamos el servidor en el archivo index.js y lo usamos con el metodo .listen para asignarle un puerto y un console log para saber que esta en linea.
- Si la consola muestra el msj que colocamos en el index y el postman muestra el mensaje que colocamos en el servidor entonces ya el servidor esta en linea.
- Ahora instalamos nodemon con el comando "npm install nodemon -D" para poder correr el servidor sin detenerlo y que guarde los cambios y la -D para que quede en las   devdependencies.
- En los scripts del package.json agregamos '"dev": "nodemon index.js"' para ejecutar el servidor con "npm run dev".
- Creamos un archivo ".gitignore" donde podemos colocar carpetas y archivos que no queremos que se suban cuando actualizamos Github.
- 




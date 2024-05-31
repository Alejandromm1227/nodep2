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
- Ahora instalamos morgan con el comando "npm install morgan -D" para poder recibir solicitudesdesde el postman como GET, POST, PUT etc.
- Importamos el archivo morgan en nuestro servidor.js y lo usamos con el metodo .use.
- Creamos una carpeta y un archivo .js donde vamos a realizar el proceso de crear nuevos objetos, en este caso paises.
- Se creo la carpeta controlador para controlar como creamos, editamos, leemos y elminamos los paises.
- Se creo la carpeta de rutas y su archivo js para enrutar los archivos desde el archivo de la carpeta controlador.
- Se creo un arreglo en el archivo de controlador y un msj en consola para saber si funciona y se exporta.
- En el archivo de rutas se importa el del controlador ademas del router de express para controlar las rutas.
- Se declara la variable del controlador y se usa con el post para acceder a uno de los objetos y saber si funciona, despues se exporta el archivo de rutas.
- En el archivo de servidor de importa el de rutas y se usa con el .use ademas de que antes se define la ruta entre comillas donde uno quiere acceder.
- Ahora instalamos moongose para usar sus herramientas con el comando "npm i mongoose".
- Se crea el archivo conexion para anclarlo a la base de datos Mongo.
- Proseguimos a instalar dotenv con el comando "npm install dotenv -D" para poder usar las variables de entorno y la importamos en el index.
- Importamos el mongoose en el archivo conexion.
- Creamos el archivo .env para las variables de entorno.
- Conectamos mediante process a la variable de entorno en el archivo .env
- En el archivo .dev colocamos la variable en mayusculas y el string que copiamos de la pagina de mongo atlas en nuestra base de datos y cambiamos la palabra password por el password que originalmente creamos.
-  Probamos que nuestro visual y postman esten anclados a la base de datos en mongo.
- Creamos el archivo de esquema para importar el mongoose y asegurarnos de crear el objeto con los requerimientos que queremos que postman nos envie.
- Editamos el objeto POST creado anteriormente para que se cree un usuario y lo hacemos con TRY y Catch usando una funcion asincrona.
- Lo hacemos solicitandole el body al postman y guardandolo en una variable y despues con un condicional si esa variable tiene algo la ponemos en consola para verla y refrescamos atlas para asegurarnos que tbn quede ahi.
- Creamos un nuevo objeto esta vez para leer todos los datos de la base y lo hacemos con un get en POSTMAN y con una variable en el archivo en el archivo de controladores a la q le aignamos lo que encontramos con find(). 
- Anclamos en el archivo de rutas el objeto de leer todos los paises.
- Hacemos los mismo con otro objeto pero esta vez para leer un solo país se usa el findbyid, y se ancla igualmente al archivo de rutas y con el get en postman.
- Repetimos el proceso para el objeto actualizar país pero esta vez con findbyidandupdate, y al igual se ancla al archivo de rutas y en el POSTMAN con PUT.
- Se hace lo mismo con el ultimo que es para borrar un archivo con findbyidanddelete, se ancla igualmente y en el POSTMAN se usa con DEL.

### Instructivo

- Crea un nuevo proyecto en Node
- Instala dependencias que vamos a necesitar (express, mongoose, dotenv, morgan y nodemon (opcional))
- Crea archivos de index y servidor para anclar a POSTMAN.
- Ahora crea un archivo conexion y anclarlo con la base de datos en atlas con el visual.
- Crear archivos de enrutamiento, esquema y controlador para crear el nucelo del proyecto y como hacerlo.
- Crear los enrutamientos en POSTMAN con el GET, POST, PUT y DEL.
- Anclarlos al visula para agregar, eliminar, actualizar y borrar archivos.
- Verificar que los datos del POSTMAN estan quedando guardados en la base en el ATLAS.
- Agregamos datos al POSTMAN y ya verificamos errores.    
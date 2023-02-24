##  :open_book: DESARROLLANDO UNA API

Descripcion

Una API REST es una forma de crear servicios web que permiten la comunicación entre diferentes sistemas de software,
como puede ser basckend, base de datos y frontend. La API REST utiliza los verbos HTTP para definir 
las operaciones que se pueden realizar en los datos,como GET para obtener datos, 
POST para crear nuevos datos, PUT para actualizar datos existentes y DELETE para eliminar datos.

## :electric_plug: TECNOLOGIAS USADAS
- Javascript:`lenguaje de programación dinámico, orientado a objetos y utilizado en la creación de aplicaciones web interactivas.`
- Git: `sistema de control de versiones distribuido para proyectos de software.`
- Json: `formato de intercambio de datos ligero y legible utilizado en aplicaciones web para transmitir información estructurada.`
- Node.js : `se utiliza para desarrollar aplicaciones escalables del lado del servidor y de red.` 
- Express : `framework de Node.js que permite crear fácilmente aplicaciones web` 
- MongoDB : `base de datos NoSQL que utiliza documentos JSON para almacenar datos.` 
- Mongoose : `biblioteca de Node.js que proporciona una capa de abstracción sobre MongoDB facilitando la creación de modelos ` 
- Postman: : ` herramienta de pruebas de API que permite enviar solicitudes HTTP a la API REST y verificar las respuestas.` 

##  CREACION DEL SERVIDOR HTTP 

Un servidor es un computador que proporciona un servicio
 - `npm init -y (para inicializar) archivo package.json`
 - `git init ---> para protegerlo y luego mandar los cambios a github`
 - `archivo de configuracion .gitignore y su contenido`
 - `archivo de configuracion .editorconfig y su contenido`
 - `archivo de configuracion .eslintrc.json y su respectivo contenido`
 - `archivo que corre todos los servicios  ----> index.js`
 - `editar los comandos en scripts dentro del archivo package.json`
 - `comando para bajar nodemon y eslint ----> **npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D**`
 - `instalar la dependencia de express para que node (la config establecida arriba` :point_up_2: `) se pueda ver ahora en el navegador`
 - `Apartir de aqui todo ira en el archivo index.js que se creo previamente`
 - `en index.js se importa express`
 - `se crea una const app donde se guarda ese express para USAR EL CONTENIDO QUE NECESITEMOS`
 - `establecemos el puerto que vamos a usar ( en mi caso process.env.port || 3000 )`
 - `APP.GET --> de la app obtengo la raiz ("/") que saldra en el navegador y las variables req y res (req, res)`
 - `funcion flecha y llaves para poner el codigo que va a ejecutar el express (lo que quiero mostrar en pantalla)`
 - `APP.USE --> Para que el navegador sepa que esa es la puerta que va a empezar a mirar que hay en esta`
 - `console.log ("mi puerto es " + port)`
 - `creo el reposito en github y lo hago el primer commit para guardar lo hecho hasta el momento`

## DESARROLLO DE LA  API REST, Node js & MongoDB Atlas, Express | CRUD

Para el desarrollo de este trabajo mi fuente de información la obtuve de los siguientes links 
- https://www.youtube.com/watch?v=S4IgPTwwPBw
- Pero sobretodo de este :point_down:
- https://www.youtube.com/watch?v=lf-L9IEdo9E



## CARPETAS Y SU ORGANIZACIÓN


| CARPETA Y ARCHIVO                       | Funcionalidad                                                                          |
|-----------------------------------------|--------------------------------------------------------------------------------------- |
| `config --> mongo.js`                   | Reside una funcion para conectar mongo con una URI                                     |
| `src/controllers --> menuController.js` | funcion que recibe si llega un parametro los recoge y manda a un servicio              |
| `src/helpers --> handeError.js  `       | me ayuda a ver en consola si hay error                                                 |
| `src/middleware --> origin.js`          | residen las funciones que luego se inyectan en las rutas sirve para protegerlas        |
| `src/models --> menu.js`                | Guarda el Schema de lo que recibiria cada menu                                         |
| `src/routes --> api.js`                 | Aqui se traen los controladores y marca la ruta con los endpoints                      |
| `src/routes --> index.js`               | al generar una nueva familia de rutas simplemente se a de crear un file con el nombre  |
| `src -->index.js`                       | Este es mi archivo principal del proyecto                                              |


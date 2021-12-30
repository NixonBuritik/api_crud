# api_crud
Api CRUD (Node.js - Sequelize - MySql)

La api cuenta con cuatro métodos para la gestión de una libreta de contactos.

La tabla se crea automáticamente en la base de datos (que debe definirse en el archivo config.js) gracias a Sequelize
(en el archivo database/db.js se crea el sequelize que será utilizado).

En models/Contact.js se define la estructura y el nombre de la tabla que se creará en la base de datos.

En request.html se generan las peticiones de prueba con ayuda de la extensión Rest Client para VS_Code.

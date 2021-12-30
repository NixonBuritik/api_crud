const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Contact extends Model {}
Contact.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING,
    celular: DataTypes.STRING,
    direccion: DataTypes.STRING
}, {
    sequelize,
    modelName: "contacts"
});

module.exports = Contact;
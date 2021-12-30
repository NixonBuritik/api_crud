const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const sequelize = require('./database/db');

const routes = require('./routes')

//configuration
const app = express()
app.set('port', process.env.PORT || 9000)

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//routes
app.get('/', (req, res) => {
    //res.send('Bienvenido a la API')
    /* Contact.create({
        nombre: "Toño",
        celular: 3134567890,
        direccion: "Cll 6 # 32-25"
    }).then(contact => {
        res.json(contact);
    }); */

    //Contact.findAll().then(contacts => {
    res.send('Inicio...')
    //});
})

app.use('/api', routes)

//server running
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
    sequelize.sync({ force: false }).then(()=>{
        console.log('Conectado a la base de datos...')
    }).catch(error => {
        console.log('Se ha producido un error...', error)
    })
})


const express = require('express');
const router = express.Router();
const Contact = require('./database/models/Contact');

// INDEX /api
router.get('/', (req, res) => {
    Contact.findAll().then(contacts => {
        res.json(contacts)
    })
})

// CREATE
router.post('/', (req, res) => {
    Contact.create({
        nombre: req.body.nombre,
        celular: req.body.celular,
        direccion: req.body.direccion
    }).then(contact => {
        res.json(contact)
    })
})

// READ /api/:id
router.get('/:id', (req, res) => {
    Contact.findByPk(req.params.id).then(contact => {
        res.json(contact)
    })
})

// UPDATE /api/:id
router.patch('/:id', (req, res) => {
    Contact.update({
        nombre: req.body.nombre,
        celular: req.body.celular,
        direccion: req.body.direccion
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})

// DELETE /api/posts/:id
router.delete('/:id', (req, res) => {
    Contact.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})


module.exports = router

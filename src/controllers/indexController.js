let db = require('../database/models')
const { Op } = require("sequelize");

module.exports = {
    home: (req,res) => {
        res.send('hola')
    },
    categorias: (req,res) => {
        db.Categorias.findAll()

        .then(categorias => {
            let response = {
                status: 200,
                meta: {
                    length: categorias.length,
                    path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: categorias
            }
            return res.status(200).json(response)
        })
    },
    marcas: (req,res) => {
        db.Marcas.findAll()

        .then(marcas => {
            let response = {
                status: 200,
                meta: {
                    length: marcas.length,
                    path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: marcas
            }
            return res.status(200).json(response)
        })
    },
    banners : (req,res) => {
        db.Banners.findAll()
        .then(banners => {
            let response = {
                status: 200,
                meta: {
                    length: banners.length,
                    path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: banners
            }
            return res.status(200).json(response)
        })
        .catch(error => res.status(500).json(error))
    },
    crearMensajes: (req,res) => {
        console.log(req.body);

        db.Mensajes.create({
            nombre:req.body.nombre,
            email:req.body.email,
            telefono:req.body.telefono,
            mensaje:req.body.mensaje,
        })
        .then(mensaje => {
            let response = {
                status: 200,
                meta: {
                    msg: "Mensaje Creado",
                    path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: mensaje
            }
            return res.status(200).json(response)
        })
    },
    verMensajes: (req,res) => {
        console.log(req.body);

        db.Mensajes.findAll()
        .then(mensajes => {
            let response = {
                status: 200,
                meta: {
                    length: mensajes.length,
                    path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: mensajes
            }
            return res.status(200).json(response)
        })
    }
}
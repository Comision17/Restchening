let db = require('../database/models')
const { Op } = require("sequelize");

module.exports = {
    listar: (req, res) => {
        let bebidas = db.Bebidas.findAll()
        let entradas = db.Entradas.findAll()
        let guarniciones = db.Guarniciones.findAll()
        let platos = db.Platos.findAll()
        let postres = db.Postres.findAll()
        Promise.all([bebidas, entradas, guarniciones, platos, postres])
            .then(([bebidas, entradas, guarniciones, platos, postres]) => {
                let array = [
                    {
                        bebidas,
                        entradas,
                        guarniciones,
                        platos,
                        postres
                    }
                ]
                let response = {
                    status: 200,
                    meta: {
                        length: array.length,
                        path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: array
                }
                return res.status(200).json(response)
            })
            .catch(err => res.status(500).json(err))
    },

    
    productoPorId: (req, res) => {
        let idParams = req.params.id
        let variedad = req.query.variedad
        let array = []
        if (variedad === 'bebidas') {
            array.push(
                db.Bebidas.findOne({
                    where: {
                        id: idParams
                    }
                })
            )
        } else if (variedad === 'entradas') {
            array.push(
                db.Entradas.findOne({
                    where: {
                        id: idParams
                    }
                })
            )
        } else if (variedad === 'guarniciones') {
            array.push(
                db.Guarniciones.findOne({
                    where: {
                        id: idParams
                    }
                })
            )
        } else if (variedad === 'platos') {
            array.push(
                db.Platos.findOne({
                    where: {
                        id: idParams
                    }
                })
            )
        } else if (variedad === 'postres') {
            array.push(
                db.Postres.findOne({
                    where: {
                        id: idParams
                    }
                })
            )
        } else {
            array.push("No se encontro lo que buscabas, recuerde añadir una categoria en la query")
        }
        Promise.all(array)
            .then(array => {
                let response = {
                    status: 200,
                    meta: {
                        length: array.length,
                        path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: array
                }
                return res.status(200).json(response)
            })
            .catch(err => res.status(500).json(err))
    },
    productoUnico: (req, res) => {
        let bebidas = db.Bebidas.findOne({
            where: {
                    nombre: {
                        [Op.substring]: req.query.nombre 
                    } 
            }
        })
        let entradas = db.Entradas.findOne({
            where: { nombre: { [Op.substring]: req.query.nombre } }
        })
        let guarniciones = db.Guarniciones.findOne({
            where: { nombre: { [Op.substring]: req.query.nombre } }
        })
        let platos = db.Platos.findOne({
            where: { nombre: { [Op.substring]: req.query.nombre } }
        })
        let postres = db.Postres.findOne({
            where: { nombre: { [Op.substring]: req.query.nombre } }
        })
        Promise.all([bebidas, entradas, guarniciones, platos, postres])
            .then(([bebidas, entradas, guarniciones, platos, postres]) => {

                let array = []

                if (req.query.categoria === 'bebida') {
                    array.push(bebidas)
                } else if (req.query.categoria === 'entrada') {
                    array.push(entradas)
                } else if (req.query.categoria === 'guarnicion') {
                    array.push(guarniciones)
                } else if (req.query.categoria === 'plato') {
                    array.push(platos)
                } else if (req.query.categoria === 'postre') {
                    array.push(postres)
                } else {
                    array.push("No se encontro lo que buscabas, recuerde añadir una categoria en la query")
                }

                let response = {
                    status: 200,
                    meta: {
                        length: array.length,
                        path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: array
                }
                return res.status(200).json(response)
            })
            .catch(err => res.status(500).json(err))
    },
    crear: (req, res) => {
        let promise = []
        if (req.query.variedad === 'bebida') {
            promise.push(
                db.Bebidas.create({
                    nombre: req.body.nombre,
                    precio: +req.body.precio,
                    litrosDimensionales: +req.body.litros,
                    marea: +req.body.marea,
                    conGas: +req.body.gas,
                    dieta: +req.body.dieta,
                    marcaId: +req.body.marca,
                    createdAt: new Date,
                    updatedAt: new Date
                })
            )
        } else if (req.query.variedad === 'entrada') {
            promise.push(
                db.Entradas.create({
                    nombre: req.body.nombre,
                    precio: +req.body.precio,
                    descripcion: req.body.descripcion,
                    celiaco: +req.body.celiaco,
                    veg: +req.body.veg,
                    categoriaId: +req.body.categoria,
                    createdAt: new Date,
                    updatedAt: new Date
                })
            )
        } else if (req.query.variedad === 'guarnicion') {
            promise.push(
                db.Guarniciones.create({
                    nombre: req.body.nombre,
                    precio: +req.body.precio,
                    descripcion: req.body.descripcion,
                    aderesos: req.body.aderesos,
                    celiaco: +req.body.celiaco,
                    veg: +req.body.veg,
                    categoriaId: +req.body.categoria,
                    createdAt: new Date,
                    updatedAt: new Date
                })
            )
        } else if (req.query.variedad === 'plato') {
            promise.push(
                db.Platos.create({
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    descripcion: req.body.descripcion,
                    aderesos: req.body.aderesos,
                    celiaco: +req.body.celiaco,
                    veg: +req.body.veg,
                    categoriaId: +req.body.categoria,
                    createdAt: new Date,
                    updatedAt: new Date
                })
            )
        } else if (req.query.variedad === 'postre') {
            promise.push(
                db.Postres.create({
                    nombre: req.body.nombre,
                    precio: +req.body.precio,
                    descripcion: req.body.descripcion,
                    celiaco: +req.body.celiaco,
                    veg: +req.body.veg,
                    categoriaId: +req.body.categoria,
                    createdAt: new Date,
                    updatedAt: new Date
                })
            )
        } else {
            promise.push("No se encontro lo que buscabas, recuerde añadir una categoria en la query")
        }
        Promise.all(promise)
            .then(promise => {
                let response = {
                    status: 200,
                    meta: {
                        length: promise.length,
                        path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: promise
                }
                return res.status(200).json(response)
            })
            .catch(err => res.status(500).json(err))
    },
    editar: (req, res) => {
        let promise = []
        console.log(req.body);
        let idParams = req.params.id
        if (req.query.variedad === 'bebidas') {
            promise.push(
                db.Bebidas.update({
                    nombre: req.body.nombre,
                    precio: +req.body.precio,
                    litrosDimensionales: +req.body.litrosDimensionales,
                    marea: +req.body.marea,
                    conGas: +req.body.gas,
                    dieta: +req.body.dieta,
                    marcaId: +req.body.marca,
                    createdAt: new Date,
                    updatedAt: new Date
                },{
                    where : {
                        id : idParams
                    }
                })
            )
        } else if (req.query.variedad === 'entrada') {
            promise.push(
                db.Entradas.update({
                    nombre: req.body.nombre,
                    precio: +req.body.precio,
                    descripcion: req.body.descripcion,
                    celiaco: +req.body.celiaco,
                    veg: +req.body.veg,
                    categoriaId: +req.body.categoria,
                    createdAt: new Date,
                    updatedAt: new Date
                },{
                    where : {
                        id : idParams
                    }
                })
            )
        } else if (req.query.variedad === 'guarniciones') {
            promise.push(
                db.Guarniciones.update({
                    nombre: req.body.nombre,
                    precio: +req.body.precio,
                    descripcion: req.body.descripcion,
                    aderesos: req.body.aderesos,
                    celiaco: +req.body.celiaco,
                    veg: +req.body.veg,
                    categoriaId: +req.body.categoria,
                    createdAt: new Date,
                    updatedAt: new Date
                },{
                    where : {
                        id : idParams
                    }
                })
            )
        } else if (req.query.variedad === 'platos') {
            promise.push(
                db.Platos.update({
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    descripcion: req.body.descripcion,
                    aderesos: req.body.aderesos,
                    celiaco: +req.body.celiaco,
                    veg: +req.body.veg,
                    categoriaId: +req.body.categoria,
                    createdAt: new Date,
                    updatedAt: new Date
                },{
                    where : {
                        id : idParams
                    }
                })
            )
        } else if (req.query.variedad === 'postres') {
            promise.push(
                db.Postres.update({
                    nombre: req.body.nombre,
                    precio: +req.body.precio,
                    descripcion: req.body.descripcion,
                    celiaco: +req.body.celiaco,
                    veg: +req.body.veg,
                    categoriaId: +req.body.categoria,
                    createdAt: new Date,
                    updatedAt: new Date
                },{
                    where : {
                        id : idParams
                    }
                })
            )
        } else {
            promise.push("No se encontro lo que buscabas, recuerde añadir una variedad en la query")
        }
        Promise.all(promise)
            .then(promise => {
                let response = {
                    status: 200,
                    meta: {
                        path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                    },
                    data: "Producto editado con exito"
                }
                return res.status(200).json(response)
            })
            .catch(err => res.status(500).json(err))
    },
    eliminar: (req, res) => {
        let promise = []
        let idParams = req.params.id
        if (req.query.categoria === 'bebidas') {
            promise.push(
                db.Bebidas.destroy({
                    where : {
                        id : idParams
                    }
                })
            )
        } else if (req.query.categoria === 'entradas') {
            promise.push(
                db.Entradas.destroy({
                    where : {
                        id : idParams
                    }
                })
            )
        } else if (req.query.categoria === 'guarniciones') {
            promise.push(
                db.Guarniciones.destroy({
                    where : {
                        id : idParams
                    }
                })
            )
        } else if (req.query.categoria === 'platos') {
            promise.push(
                db.Platos.destroy({
                    where : {
                        id : idParams
                    }
                })
            )
        } else if (req.query.categoria === 'postres') {
            promise.push(
                db.Postres.destroy({
                    where : {
                        id : idParams
                    }
                })
            )
        } else {
            promise.push("No se encontro lo que buscabas, recuerde añadir una categoria en la query")
        }
        Promise.all(promise)
        .then(promise => {
            let response = {
                meta: {
                    status: 202,
                    path: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: "Producto eliminado con exito"
            }
            return res.status(200).json(response)
        })
        .catch(err => res.status(500).json(err))
    }
}
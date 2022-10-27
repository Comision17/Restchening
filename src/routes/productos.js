var express = require('express');
var router = express.Router();

/* GET Productos controller. */
let {crear,productoUnico, listar, editar, eliminar} = require('../controllers/productosController')

/* Productos */
router.get('/', listar);
router.get('/detalle', productoUnico);

router.post('/admin/crear', crear);
router.put('/admin/editar/:id', editar);
router.delete('/admin/eliminar/:id', eliminar);

module.exports = router;
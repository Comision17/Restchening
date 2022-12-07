var express = require('express');
var router = express.Router();

let {home, categorias, marcas, banners,crearMensajes, verMensajes} = require('../controllers/indexController')

/* GET home page. */
router.get('/', home);
router.get('/categorias', categorias);
router.get('/marcas', marcas);
router.get('/banners', banners);
router.post('/crearMensajes', crearMensajes);
router.get('/mensajes', verMensajes);

module.exports = router;

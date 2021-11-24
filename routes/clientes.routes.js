const router = require ('express').Router();
const operation = require('../operations/clientes.operations');
'/api/clientes'



router.get('/',operacion.getClientes);
router.get();
router.post();
router.put();
router.delete();

module.exports = router
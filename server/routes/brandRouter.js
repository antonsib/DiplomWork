const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')


router.post('/', brandController.create)
router.get('/', brandController.getAll)
router.post('/delete', brandController.delete)

module.exports = router
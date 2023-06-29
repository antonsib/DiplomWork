const Router = require('express')
const salesController = require("../controllers/salesController");
const router = new Router()

router.post('/', salesController.create)
router.post('/getOne', salesController.getOne)
router.get('/',salesController.getAll)
router.post('/delete',salesController.deleteOne)

module.exports = router
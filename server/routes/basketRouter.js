const Router = require('express')
const basketController = require("../controllers/basketController");
const router = new Router()

router.post('/', basketController.create)
router.post('/getOne', basketController.getOne)
router.post('/delete', basketController.delete)
router.post('/deleteOne', basketController.deleteOne)

module.exports = router
const Router = require('express')
const router = new Router()
const deviceRouter = require('./productRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const  basketRouter = require('./basketRouter')
const  salesRouter = require('./salesRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', deviceRouter)
router.use('/basket', basketRouter)
router.use('/sales', salesRouter)

module.exports = router
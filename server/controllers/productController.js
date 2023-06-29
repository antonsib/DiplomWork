const uuid = require('uuid')
const path = require('path');
const {Product, ProductInfo, Type} = require('../models/models')
const ApiError = require('../error/ApiError');
const {Sequelize ,Op}=require('sequelize')//импортируем sequelize

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"//кодирование
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                )
            }

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page,price1} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let products;
            if (!brandId && !typeId) {
                products = await Product.findAndCountAll({where: {price: {[Op.lte]: price1,},},limit, offset})
            }
            if (brandId && !typeId) {
                products = await Product.findAndCountAll({where: {price: {[Op.lte]: price1,},brandId}, limit, offset,})
            }
            if (!brandId && typeId) {
                products = await Product.findAndCountAll({where: {price: {[Op.lte]: price1,},typeId}, limit, offset})
            }
            if (brandId && typeId) {
                products = await Product.findAndCountAll({where: {price: {[Op.lte]: price1,},typeId, brandId}, limit,  offset})
            }
            return res.json(products)

    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            },
        )
        return res.json(product)
    }

    async delete(req, res,next) {
        const {name} = req.body
        const d=await Product.findOne({where:{name}})
        if(!d)  return next(ApiError.badRequest('Удаляемый товар не существует'))
        const productId=d.id
        const product1 = await ProductInfo.destroy({where: {productId}})
        const product = await Product.destroy({where: {name}})
        return res.json(product)
    }

}

module.exports = new ProductController()


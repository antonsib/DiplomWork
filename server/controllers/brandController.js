const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res,next) {
        const {name} = req.body
        try {
            const brands = await Brand.destroy({where: {name}})
            return res.json(brands)
        }
        catch (e) {
            return next(ApiError.badRequest('Удаляемый бренд не существует'))
        }
    }
}

module.exports = new BrandController()

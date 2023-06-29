const { Basket} = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
    async create(req, res, next) {
        try {
            let {name, price, img, info,idUser} = req.body
            const basketProduct = await Basket.create({name, price, img,info,idUser});
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getOne(req, res) {
        const {idUser} = req.body
        const product = await Basket.findAll(
            {
                where: {idUser},
            },
        )
        return res.json(product)
    }
    async delete(req, res) {
        const {idUser} = req.body
        const product = await Basket.destroy({where: {idUser}})
        return res.json(product)
    }

    async deleteOne(req, res) {
        const {id} = req.body
        const product = await Basket.destroy({where: {id}})
        return res.json(product)
    }
}

module.exports = new BasketController()

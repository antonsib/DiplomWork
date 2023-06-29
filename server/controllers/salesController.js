const {Sales} = require("../models/models");
const ApiError = require("../error/ApiError");

class salesController {
    async create(req, res, next) {
        try {
            let {name, price, img,idUser} = req.body
            const sales = await Sales.create({name, price, img,idUser});
            return res.json(sales)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getOne(req, res) {
        const {idUser} = req.body
        const sales = await Sales.findAll(
            {
                where: {idUser}
            },
        )
        return res.json(sales)
    }

    async getAll(req, res) {
        const sales = await Sales.findAll({order: [ [ 'idUser', 'ASC' ] ]})
        return res.json(sales)
    }
    async deleteOne(req, res) {
        const {id} = req.body
        const sales = await Sales.destroy({where:{id}})
        return res.json(sales)
    }
}

module.exports = new salesController()
const {Type} = require('../models/models')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async delete(req, res) {
        const {name} = req.body
        const types = await Type.destroy({where:{name}})
        return res.json(types)
    }
}

module.exports = new TypeController()

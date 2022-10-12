const { Phitsanulok } = require('../models')
module.exports = {
    // get all phitsanulok
    async index(req, res) {
        try {
            const phitsanuloks = await Phitsanulok.findAll()
            res.send(phitsanuloks)
        } catch (err) {
            res.status(500).send({
                error: 'The phitsanuloks information was incorrect'
            })
        }
    },
    // create phitsanulok
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const phitsanulok = await Phitsanulok.create(req.body)
            res.send(phitsanulok.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create phitsanulok incorrect'
            })
        }
    },
    // edit phitsanulok, suspend, active
    async put(req, res) {
        try {
            await Phitsanulok.update(req.body, {
                where: {
                    id: req.params.phitsanulokId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update phitsanulok incorrect'
            })
        }
    },
    
// delete phitsanulok
async remove(req, res) {
        try {
            const phitsanulok = await Phitsanulok.findOne({
                where: {
                    id: req.params.phitsanulokId
                }
            })
            if (!phitsanulok) {
                return res.status(403).send({
                    error: 'The phitsanulok information was incorrect'
                })
            }
            await phitsanulok.destroy()
            res.send(phitsanulok)
        } catch (err) {
            res.status(500).send({
                error: 'The phitsanulok information was incorrect'
            })
        }
    },
    // get phitsanulok by id
    async show(req, res) {
        try {
            const phitsanulok = await Phitsanulok.findByPk(req.params.phitsanulokId)
            res.send(phitsanulok)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The phitsanulok information was incorrect'
            })
        }
    }
}
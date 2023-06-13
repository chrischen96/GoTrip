const {NPs} = require('../models')

const create = async(req, res) => {
    try {
        console.log(req.body)
        const NP = new NPs(req.body)
        await NP.save()
        res.status(200).json(NP)
    } catch(e) {
        res.status(500).json({message: e.message})
    }
}

const getAll = async(req, res) => {
    try {
        const nps = await NPs.find()
        console.log(nps)
        if (nps) {
            res.status(200).json(nps)
        } else {
            res.status(404).send('Not found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const getById = async(req, res) => {
    try {
        const {id} = req.params
        const np = await NPs.findById(id)
        if (np) {
            res.status(200).json(np)
        } else {
            res.status(404).send('Not found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const find = async(req, res) => {
    try {
        const nps = await NPs.find(req.query)
        if (nps) {
            res.status(200).json(nps)
        } else {
            res.status(404).send('Not found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const update = async(req, res) => {
    try {
        const {id} = req.params
        const nps = await NPs.findByIdAndUpdate(id, req.body, {new: true})
        if (nps) {
            res.status(200).json(nps)
        } else {
            res.status(404).send('Not found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteNP = async(req, res) => {
    try {
        const {id} = req.params
        const np = await NPs.findByIdAndDelete(id)
        if (np) {
            res.status(200).json(np)
        } else {
            res.status(404).send('Not found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    create,
    getAll,
    getById,
    find,
    update,
    deleteNP
}
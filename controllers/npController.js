const {NPs} = require('../models')

const creat = async(req, res) => {
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

    } catch (e) {
        res.status(500).send(e.message)
    }
}

const getById = async(req, res) => {
    try {

    } catch (e) {
        res.status(500).send(e.message)
    }
}

const find = async(req, res) => {
    try {

    } catch (e) {
        res.status(500).send(e.message)
    }
}

const update = async(req, res) => {
    try {

    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteNP = async(req, res) => {
    try {

    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    creat,
    getAll,
    getById,
    update,
    deleteNP
}
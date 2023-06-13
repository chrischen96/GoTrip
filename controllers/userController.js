const {Users} = require('../models')

const create = async(req, res) => {
    try {
        const user = new Users(req.body)
        await user.save()
        res.status(200).json(user)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const getAll = async(req, res) => {
    try {
        const users = await Users.find()
        if (users) {
            res.status(200).json(users)
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
        const user = await Users.findById(id)
        if (user) {
            res.status(200).json(user)
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
        const user = await Users.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).send('Not found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteUser = async(req, res) => {
    try {
        const {id} = req.params
        const user = await Users.findByIdAndDelete(id)
        if (user) {
            res.status(200).json(user)
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
    update,
    deleteUser
}
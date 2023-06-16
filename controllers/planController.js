const {Plans} = require('../models')

const create = async(req, res) => {
    try {
        console.log(req.body)
        const plan = new Plans(req.body)
        await plan.save()
        res.status(200).json(plan)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const getAll = async(req, res) => {
    try {
        const plans = await Plans.find()
        if (plans) {
            res.status(200).json(plans)
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
        const plan = await Plans.findById(id)
        if (plan) {
            res.status(200).json(plan)
        } else {
            res.status(404).send('Not found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const getByUser = async (req, res) => {
    try {
        const {username} = req.params
        const plans = await Plans.find({user: username})
        if (plans) {
            res.status(200).json(plans)
        } else {
            res.status(404).send('Not found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const find = async (req, res) => {
    try {
        const plans = await Plans.find(req.query)
        res.status(200).json(plans)
    } catch (e) {
        res.status(500).rend(e.message)
    }
}

const update = async(req, res) => {
    try {
        const {id} = req.params
        const plan = await Plans.findByIdAndUpdate(id, req.body, {new: true})
        if (plan) {
            res.status(200).json(plan)
        } else {
            res.status(404).send('Not Found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deletePlan = async(req, res) => {
    try {
        const {id} = req.params
        const plan = await Plans.findByIdAndDelete(id)
        console.log(id,plan)
        if (plan) {
            res.status(200).json(plan)
        } else {
            res.status(404).send('Not Found')
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    create,
    getAll,
    getById,
    getByUser,
    find,
    update,
    deletePlan
}
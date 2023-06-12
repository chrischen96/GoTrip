const {NPs} = require('../models')

const creat = async(req, res) => {
    await NPs.find()
}

const getAll = async(req, res) => {
    
}

const getById = async(req, res) => {

}

const getByName = async(req, res) => {

}

const update = async(req, res) => {

}

const deleteNP = async(req, res) => {

}

module.exports = {
    creat,
    getAll,
    getById,
    getByName,
    update,
    deleteNP
}
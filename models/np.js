const {Schema} = require('mongoose')

const npSchema = new Schema(
    {
    name: {type: String, unique: true, required: true},
    image: String,
    state: {type: String, required: true},
    latLng: {type:String, required: true},
    establishDate: {type: Date, required: true},
    area: {type: Number, required: true},
    visitors: {type: Number, required: true},
    description: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = npSchema
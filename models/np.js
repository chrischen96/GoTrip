const {Schema} = require(mongoose)

const npSchema = new Schema(
    {
    name: {type: String, unique: true, required: true},
    image: String,
    location: {type: String, required: true},
    establishDate: {type: Date, required: true},
    area: {type: String, required: true},
    visitorNum: {type: Number, required: true},
    description: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = npSchema
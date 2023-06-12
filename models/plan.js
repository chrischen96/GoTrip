const {Schema} = require(mongoose)

const planSchema = new Schema(
    {
    title: {type: String, required: true},
    destination: {type: String, ref: 'NP'},
    users: {type: String, ref: 'User'},
    startDate: {type: Date, require: true},
    duration: {type: Number, require: true, min: 1},
    budget: {type: Number, require: true},
    note: {type: String, maxLength: 500}
    },
    { timestamps: true }
)

module.exports = planSchema
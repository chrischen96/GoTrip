const {Schema} = require('mongoose')

const userSchema = new Schema(
    {
    name: {type: String, required: true},
    location: {type: String, required: true},
    email: {type: String, unique: true, required: true, validate: /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/},
    phone: {type: String, required: true, validate: /\d{8}/},
    username: {type: String, unique: true, required: true},
    password: {type: String, validate: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/}
    },
    { timestamps: true }
)

module.exports = userSchema

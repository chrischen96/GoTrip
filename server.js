const express = require('express')
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
require('dotenv').config();
const db = require('./db')
const logger = require('morgan')
const AppRouter = require('./routers/AppRouter')
const PORT = process.env.PORT | 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(sessions({
    secret: process.env.SESSION,
    cookie: { maxAge: 60 * 60 * 1000 },
    saveUninitialized: true,
    resave: false 
}));
console.log(process.env.SESSION)
app.use(logger())

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

app.get('/', (req, res) => res.status(200).json({message: 'This is nps API'}))

app.use('/api', AppRouter)
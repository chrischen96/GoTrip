const express = require('express')
const sessions = require('express-session')
const cookieParse = require('cookie-parser')
const db = require('./db')
const PORT = process.env.PORT | 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(sessions({
    secret: process.env.SESSION,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
    resave: false 
}));
app.use(cookieParse())

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

app.get('/', (req, res) => res.status(200).json({message: 'This is nps API'}))

app.use('api', AppRouter)
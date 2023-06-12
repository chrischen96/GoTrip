const express = require('express')
const db = require('./db')
const PORT = process.env.PORT | 3001

const app = express()

app.use(express.json())

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

app.get('/', (req, res) => res.status(200).json({message: 'this is loading page'}))

app.use('api', AppRouter)
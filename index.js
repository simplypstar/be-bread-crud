const express = require('express')
require('dotenv').config()
const breadController = require('./controllers/bread')


const app = express()

const PORT = process.env.PORT

app.use('/breads', breadController)

app.listen(PORT, console.log(`listening on port ${PORT}`))
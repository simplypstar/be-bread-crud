const express = require('express')
const methodOverride = require('method-override')
require('dotenv').config()
const breadController = require('./controllers/bread')

const app = express()

// MIDDLEWARE - always goes above the routes
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')) // where to find new assets
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routes
app.use('/breads', breadController)



const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))
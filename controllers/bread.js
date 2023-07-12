const router = require('express').Router()
const Bread = require('../models/bread')


// Get all breads
router.get('/', (req,res) => {
    res.render('index', {breads: Bread})
})

// GET render new page
router.get('/new', (req, res) => { 
    res.render('new')
})

// Get bread by index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.render('show', {
        bread: Bread[index],
        index
    })
})

// POST request to create new bread
router.post('/', (req, res) => {
    if(req.body.hasGlutten === 'on') {
        req.body.hasGluten = true
    }   else {
        req.body.hasGluten = false
    }

    if(!req.body.img) req.body.image = 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'                      

    Bread.push(req.body)
    res.status(303).redirect('/breads')
})

router.delete('/:index', (req, res) => {
    const { index } = req.params
    Bread.splice(index, 1)
    res.status(303).redirect('/breads')
})


module.exports = router

// separation of concerns
// controller watches for incoming requests
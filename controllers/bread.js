const router = require('express').Router()
const Bread = require('../models/bread')


// Get all breads
router.get('/', async (req, res) => {
    const breads = await Bread.find()
    res.render('index', {breads})
})

// GET render new page
router.get('/new', (req, res) => { 
    res.render('new')
})

// Get bread by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('show', { bread
    })
})

// POST request to create new bread
router.post('/', async (req, res) => {
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    }   else {
        req.body.hasGluten = false
    }

    if(!req.body.img) req.body.image = undefined                

    await Bread.create(req.body)
    res.status(303).redirect('/breads')
})

// GET edit page
router.get('/:index/edit', (req, res) => {
    const { index } = req.params
    res.render('edit', {
        bread: Bread[index],
        index
    })
})

// PUT update to a bread by index
router.put('/:index', (req, res) => {
    const { index } = req.params
    if(req.body.hasGlutten === 'on') {
        req.body.hasGluten = true
    }   else {
        req.body.hasGluten = false
    }

    if(!req.body.img) req.body.image = undefined                 

    Bread[index] = req.body
    res.status(303).redirect(`/breads/${index}`)
})

router.delete('/:index', (req, res) => {
    const { index } = req.params
    Bread.splice(index, 1)
    res.status(303).redirect('/breads')
})


module.exports = router

// separation of concerns
// controller watches for incoming requests
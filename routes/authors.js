const express = require('express')
const { route } = require('.')
const router = express.Router()

// All Author Route
router.get('/', (req, res) =>{
    res.render('authors/index')
})


// New author route
router.get('/new', (req, res) => {
    res.render('authors/new')
})

// Create author route
router.post('/new',  (req, res) => {
    res.send('Create')
})


module.exports = router
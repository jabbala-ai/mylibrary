const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All Author Route
router.get('/', (req, res)=>{
    res.render("authors/index");
});

//Add new Author Route
router.get('/new',(req, res)=>{
    res.render('authors/new', {'author': new Author()})
});

// Create author route
router.post('/', (req, res)=>{
    res.send('Creating')
});
module.exports = router
const express = require('express')
const Book = require('../models/Book')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.json({
            success: true,
            books
        })
    } catch (err) {
        res.status(400).json({
            success: false, 
            message: err.message
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.json({
            success: true,
            book
        })
    } catch (err) {
        res.status(400).json({
            success: false, 
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.title,
        summary: req.body.summary,
        isbn: req.body.isbn
    })
    try {
        const savedBook = await book.save()
        res.json(savedBook)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.remove({
            _id: req.params.id
        })
        res.json(book)
    } catch (err) {
        res.status(400).json({
            success: false, 
            message: err.message
        })
    }   
})

router.patch('/:id', async (req, res) => {
    try {
        const book = await Book.updateOne(
            {
                _id: req.params.id
            },
            {
                $set: {
                    title: req.body.title,
                    author: req.body.title,
                    summary: req.body.summary,
                    isbn: req.body.isbn
                }
            }
        )
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router
const express = require('express')
const Book = require('../models/Book')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const data = await Book.find().populate({
            path: 'booksCopy', 
            select: 'status loan'
        })
        res.status(200).json({
            success: true, 
            data
        })
    } catch (err) {
        res.status(400).json({
            success: false, 
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body)
        await book.save()
        res.status(201).json({
            success: true, 
            data: book 
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router
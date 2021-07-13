const express = require('express')
const router = express.Router()
const booksService = require('../service/booksService')

router.get('/books', async (req, res) => {
    const books = await booksService.getBooks()
    res.json(books)
})

router.post('/books', async (req, res) => {
    const book = req.body
    const newBook = await booksService.saveBook(book)
    res.json(newBook)
})

router.put('/books/:id', async (req, res) => {
    const book = req.body
    await booksService.updateBook(req.params.id, book)
    res.end()
})

router.delete('/books/:id', async (req, res) => {
    await booksService.deleteBook(req.params.id)
    res.end()
})

module.exports = router
const connection = require('../connection/database')
const Book = require('../model/Book')

exports.getBooks = () => {
    return Book.find()
}

exports.getBook = (id) => {
    return Book.findById(id)
}

exports.saveBook = (book) => {
    const doc = new Book({
        title: book.title,
        author: book.author,
        summary: book.summary,
        isbn: book.isbn
    })
    return doc.save()
}

exports.updateBook = (id, book) => {
    return Book.updateOne(
        {
            _id: id
        },
        {
            $set: {
                title: book.title,
                author: book.author,
                summary: book.summary,
                isbn: book.isbn
            }
        }
    )
}

exports.deleteBook = (id) => {
    const doc = new Book({
        _id: id
    })
    return doc.deleteOne()
}
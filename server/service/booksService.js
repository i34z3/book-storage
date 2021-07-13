const booksData = require('../data/booksData')

exports.getBooks = () => {
    return booksData.getBooks()
}

exports.getBook = (id) => {
    return booksData.getBook(id)
}

exports.saveBook = (book) => {
    return booksData.saveBook(book)
}

exports.updateBook = (id, book) => {
    return  booksData.updateBook(id, book)
}

exports.deleteBook = (id) => {
    return booksData.deleteBook(id)
}

const express = require('express')
const mongoose = require('./database/connection')
const booksRoute = require('./routes/books')

const app = express()


app.use(express.json())
app.use('/books', booksRoute)

app.listen('3000', 
    () => console.log('Listening on port 3000')
)
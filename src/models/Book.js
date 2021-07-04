const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const bookSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    author: {
        type: String,
        required: true,
        min: 6
    },
    summary: {
        type: String, 
        required: true
    },
    isbn: {
        type: String, 
        required: true
    }
})

bookSchema.virtual('booksCopy', {
    ref: 'Copy',
    localField: '_id',
    foreignField: 'book'
})

bookSchema.set('toObject', { 
    virtuals: true 
})
bookSchema.set('toJSON', { 
    virtuals: true 
})

module.exports = mongoose.model('Book', bookSchema)
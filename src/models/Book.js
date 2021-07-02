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
    },
    bookCopies: [{
        type: Schema.Types.ObjectId,
        ref: 'Copy'
    }]
})

bookSchema.virtual('booksCopy', {
    ref: 'Copy',
    localField: '_id',
    foreignField: 'copy'
})

bookSchema.set('toObject', { 
    virtuals: true 
})
bookSchema.set('toJSON', { 
    virtuals: true 
})

module.exports = mongoose.model('Book', bookSchema)
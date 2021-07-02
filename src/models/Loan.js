const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const loanSchema = new Schema({
    copy: {
        type: Schema.Types.ObjectId, 
        ref: 'Copy',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        default: Date.now + 7*24*60*60*1000
    }
})

module.exports = mongoose.model('Loan', loanSchema)
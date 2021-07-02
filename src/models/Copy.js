const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const copySchema = new Schema({
    book: {
        type: Schema.Types.ObjectId, 
        ref: 'Book',
        required: true
    },
    status: {
        type: Schema.Types.ObjectId, 
        ref: 'Status',
        required: true
    },
    loan: {
        type: Schema.Types.ObjectId, 
        ref: 'Loan'
    }
})

copySchema.virtual('copiesLoan',{
    ref: 'Loan',
    localField: '_id',
    foreignField: 'loan'
})

copySchema.virtual.set('toObject', { 
    virtuals: true 
})
copySchema.virtual.set('toJSON', { 
    virtuals: true 
})

module.exports = mongoose.model('Copy', copySchema)
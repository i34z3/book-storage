const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
})

userSchema.virtual('userLoans',{
    ref: 'Loan',
    localField: '_id',
    foreignField: 'loan'
})

userSchema.virtual.set('toObject', { 
    virtuals: true 
})
userSchema.virtual.set('toJSON', { 
    virtuals: true 
})

module.exports = mongoose.model('User', userSchema)
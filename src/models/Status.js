const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const statusSchema = new Schema({
    description: {
        type: String, 
        required: true,
        enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
        unique: true
    }
})

statusSchema.virtual('statusCopy',{
    ref: 'Copy',
    localField: '_id',
    foreignField: 'copy'
})

statusSchema.virtual.set('toObject', { 
    virtuals: true 
})
statusSchema.virtual.set('toJSON', { 
    virtuals: true 
})

module.exports = mongoose.model('Status', statusSchema)
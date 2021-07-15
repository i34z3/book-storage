const mongoose = require('mongoose')
require('dotenv/config')

const db = mongoose.connect(process.env.DB_CONNECTION, {  
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
})

module.exports = db
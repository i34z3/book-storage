const mongoose = require('mongoose')
require('dotenv/config')

const db = mongoose.connect("mongodb+srv://developer:OIQmc0rnKKbdiThA@cluster0.8ombf.mongodb.net/bookStorage?retryWrites=true&w=majority", {  
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
})

module.exports = db
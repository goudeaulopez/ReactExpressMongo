const mongoose = require('mongoose')
const {Schema} = mongoose
//const productos = require('./product')

const categorySchema = new Schema({
    name:String,
    description:String ,
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products'
    }]
})
mongoose.model('categories',categorySchema)
const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    productName: String,
    description: String,
    price: String,
    catId: { type: Schema.Types.ObjectId, ref: 'categories' }
})
//module.exports = productSchema
mongoose.model('products',productSchema)




/*
const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name:String,
    description:String
})
mongoose.model('categories',userSchema)

*/
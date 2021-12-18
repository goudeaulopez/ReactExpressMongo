require('./models/category')
require('./models/product')
const express = require('express')
const mongoose = require('mongoose')
const key = require('./config/dev.js')


const mongoUri= key.MONGO_URI
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
const app = express();
app.use(express.json())
mongoose.connection.on('connected', ()=>{
    console.log('you are connected to a mongo instance')
})
mongoose.connection.on('error', ()=>{
    console.log('error connected to a mongodb')
})

require('./routes/categoryRoutes')(app)
require('./routes/productsRoutes')(app)
const PORT = process.env.PORT || 5000
app.listen(PORT)
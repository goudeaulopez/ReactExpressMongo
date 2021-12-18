const mongoose = require('mongoose')
const Products = mongoose.model('products')

module.exports = app => {
    app.post('/products/create/:_id', async (req,res)=>{
        const {productName,description,price} = req.body;
        const {_id} = req.params
        console.log(_id)
        if(!productName || !description || !price){
            return res
            .status(422)
            .send({ error: 'You must provide a productName, description and price'})
        }
        try {
            const product = new Products({productName, description,price,catId:_id})
            await product.save()
            res.send(product)

        }catch(err){
            res.status(422).send({error: err.message})
        }

    })
    app.get('/products', async (req,res)=>{
        const products = await Products.find({})
        res.send(products)
    })
    app.get('/products/:_id',async (req,res)=>{
        const {_id } = req.params
        try{
            const product = await Products.findOne({_id})
            res.send(product)
        }catch(err){
            res.status(422).send({error:err.message})
        }
    })

    app.delete('/products/delete/:_id', async (req,res)=>{
        const {_id} = req.params
        try{
        await Products.findOneAndRemove({_id})
        res.send({message:'element removed'})
        }catch(err){
        res.status(422).send({error:err.message})
        }
    })
    app.put('/products/update/:_id', async (req,res)=>{
        const {_id} = req.params 
        const {productName,description,price} = req.body

        if(!productName || !description || !price){
            return res.status(422).send({error: 'You must update providing all fields'})
        }
        try{
           const prod =  await Products.findOneAndUpdate({_id}, {productName,description,price})
           res.send(prod)
        }catch(err){
           res.status(422).send({error: err.message})
        }
    })
}
/*
// /products/update/

app.put('/categories/update/:_id', async (req,res)=>{
        const {_id} = req.params
        console.log(_id)
        const {name,description} = req.body

        if(!name || !description){
            return res
            .status(422)
            .send({ error: 'You must update providing a name and description'})
        }
        try{
             const category = await Category.findOneAndUpdate({_id},{name,description})
             res.send(category)
        }catch(err){
            res.status(422).send({error: err.message})
        }
    })






*/

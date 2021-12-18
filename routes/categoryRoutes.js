const mongoose = require('mongoose')
const Category = mongoose.model('categories')
const Product = mongoose.model('products')

module.exports = app => {
    app.get('/categories', async (req,res)=>{
        const categories = await Category.find({})
        res.send(categories)
    })
    app.post('/categories/create', async (req,res)=>{
        const {name,description} = req.body;
        if(!name || !description){
            return res
            .status(422)
            .send({ error: 'You must provide a name and description'})
        }
        try {
            const category = new Category({name,description})
            await category.save()
            res.send(category)

        }catch(err){
            res.status(422).send({error: err.message})
        }

    })
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
    app.get('/categories/:_id', async (req,res)=>{
        const {_id } = req.params

        try{ //
            const category = await Category.findOne({_id})
        
        res.send(category) 
        }catch(err){
            res.status(422).send({error: err.message})
        }
    })
    
    app.delete('/categories/delete/:_id', async (req,res)=>{
        const {_id} = req.params
        var i = 0;
        try{
           await Category.findOneAndRemove({_id})
        
          const prod = await Product.find({})
           prod.map(elem=>{
               if(elem.catId.toString() === req.params._id.toString()){
                   elem.remove()
               }
           })
          
           res.send({message:'element removed'})
        }catch(err){
            res.status(422).send({error: err.message})
        }
    })
}


/*
ShoppingList.findOneAndRemove(query, options, function(err, shoppingList) {
    if (err) { 
      return callback(err); 
    }

    // Remove all items in this shopping list
    Item.find({ shoppingList_id: id }).remove(callback);
  });

*/
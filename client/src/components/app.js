import React from 'react'
import { Router,Route,Switch } from 'react-router-dom'
import List from './list'
import Create from './create'
import Update from './update'
import Display from './display'
import CreateProduct from './create_product'
import DisplayProducts from './displayproduct'
import UpdateProduct from './update_product'
import history from '../history'


class App extends React.Component{
    render(){
        return(
            <div>
              <Router history={history}>
                <Switch>
                   <Route path="/" exact  component={List} />
                   <Route path="/product/:_id" component={DisplayProducts} />
                   <Route path="/products/create/:_id"  component={CreateProduct} />
                   <Route path="/products/update/:_id" component={UpdateProduct}/>
                   <Route path="/create"  component={Create}  />
                   <Route path="/update/:_id"  component={Update}  />
                   <Route path="/:_id" component={Display} />
                </Switch>
               </Router> 
            </div>
        )
    }
}
export default App




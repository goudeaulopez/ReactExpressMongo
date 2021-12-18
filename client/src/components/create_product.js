import React from 'react'
import {connect} from 'react-redux'
import {createProductAction} from '../actions/index'
import FormProduct from './form_product'

class CreateProduct extends React.Component{
    onsubmit = data => {
        console.log(data,this.props.match.params._id)
        this.props.createProductAction(this.props.match.params._id,data)
    }
    render(){
        console.log(this.props.match.params._id)
        return(
            <div>
               <FormProduct title="Create" onsubmit={this.onsubmit}/>
            </div>
        )
    }
}
export default connect(null,{createProductAction})(CreateProduct)
import React from 'react'
import {connect} from 'react-redux'
import {updateProductAction} from '../actions/index'
import FormProduct from './form_product'

class UpdateProduct extends React.Component{
    onsubmit = data => {
       this.props.updateProductAction(this.props.match.params._id,data,this.props.selected.catId)
    }
    render(){
        return(
            <div>
              <FormProduct title="update" onsubmit={this.onsubmit} selected={this.props.selected}/>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{ selected: state.prod[ownProps.match.params._id]}
}
export default connect(mapStateToProps,{updateProductAction})(UpdateProduct)
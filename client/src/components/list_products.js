import React from 'react'
import {connect} from 'react-redux'
import {listProductsAction} from '../actions/index'
import ListItemProd from './listItemProduct'

class ListProducts extends React.Component{
    componentDidMount(){
        this.props.listProductsAction()
    }
    render(){
        console.log(this.props.listProducts)
        return(
            <div>
              <ListItemProd   listprod={this.props.listProducts} catid={this.props.catid}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { listProducts: Object.values(state.prod)}
}
export default connect(mapStateToProps,{listProductsAction})(ListProducts)
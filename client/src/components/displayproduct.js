import React from 'react'
import {connect} from 'react-redux'
import {displayProductAction,deleteProductAction} from '../actions/index.js'
import history from '../history.js'

class DisplayProducts extends React.Component{
    componentDidMount(){
        this.props.displayProductAction(this.props.match.params._id)
        console.log(this.props.match.params._id)
    }
    render(){
        if(!this.props.selProd){
            return<div>loading!!!</div>
        }
        console.log(this.props.selProd._id,this.props.selProd.catId)
        return(
            <div>
                <button onClick={()=> history.push(`/${this.props.selProd.catId}`) }>back</button>
                <button onClick={()=>this.props.deleteProductAction(this.props.selProd._id,this.props.selProd.catId)}>remove</button>
                <button onClick={()=>history.push(`/products/update/${this.props.selProd._id}`)}>Update</button>
                <div>{this.props.selProd.productName}</div>
            </div>
           

        )
    }
}
const mapStateToProps=(state,ownProps)=>{
   return{ selProd: state.prod[ownProps.match.params._id]}
}
export default connect(mapStateToProps,{displayProductAction,deleteProductAction})(DisplayProducts)